import sharp from 'sharp';
import fs from 'fs';

// 压缩头像图片
async function compressImage() {
  try {
    // 读取原始图片
    const inputBuffer = fs.readFileSync('public/profile-photo.png');
    
    // 压缩并转换为 JPG
    await sharp(inputBuffer)
      .resize(400, 400, { 
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 85,
        progressive: true
      })
      .toFile('public/profile-photo.jpg');
    
    // 获取文件大小
    const originalSize = fs.statSync('public/profile-photo.png').size;
    const compressedSize = fs.statSync('public/profile-photo.jpg').size;
    
    console.log(`✅ 压缩完成！`);
    console.log(`原始大小: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`压缩后: ${(compressedSize / 1024).toFixed(2)} KB`);
    console.log(`节省: ${((1 - compressedSize/originalSize) * 100).toFixed(1)}%`);
    
    // 删除原始 PNG
    fs.unlinkSync('public/profile-photo.png');
    console.log('已删除原始 PNG 文件');
    
  } catch (error) {
    console.error('❌ 压缩失败:', error);
    process.exit(1);
  }
}

compressImage();