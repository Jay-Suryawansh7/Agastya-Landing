import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function exportWaitlist() {
  try {
    console.log('🔄 Fetching waitlist data...');
    const users = await prisma.waitlist.findMany({
      orderBy: { createdAt: 'desc' },
    });

    if (users.length === 0) {
      console.log('⚠️  No users in waitlist.');
      return;
    }

    console.log(`✅ Found ${users.length} users.`);

    // Create CSV content
    const headers = ['ID', 'Name', 'Email', 'Organization', 'Role', 'Usage Reason', 'Created At'];
    const csvRows = users.map(user => {
      return [
        user.id,
        `"${user.name}"`,
        user.email,
        `"${user.organization || ''}"`,
        `"${user.role || ''}"`,
        `"${user.usageReason?.replace(/"/g, '""') || ''}"`,
        user.createdAt.toISOString()
      ].join(',');
    });

    const csvContent = [headers.join(','), ...csvRows].join('\n');

    // Save to file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `waitlist_export_${timestamp}.csv`;
    const outputPath = path.join(process.cwd(), filename);

    fs.writeFileSync(outputPath, csvContent);

    console.log(`\n🎉 Export successful!`);
    console.log(`📄 File saved to: ${outputPath}`);

  } catch (error) {
    console.error('❌ Export failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

exportWaitlist();
