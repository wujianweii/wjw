import { GetUrlMainPath, addimgheader } from './filters'
// import router from '../router'

const webUrl = window.location.protocol + '//' + window.location.host
const forumCode = window.$render_data.forum.forumCode

export default{
  install (Vue, options) {
    // 头像跨域解决 https://v2.wezan.net/c/4go5a90ad2/proxy-image?url=imgurl(imgurl为跨域图片url 传值解决跨域问题)
    Vue.prototype.handleUserAvatar = () => {
      let userAvatar = '';
      const logoUrl = window.$render_data.user.avatar
      if ((String(logoUrl).indexOf('https://cdn.myfans.cc/') !== -1) || (String(logoUrl).indexOf('https://ocrjl5j3c.qnssl.com/') !== -1)) {
        userAvatar = logoUrl;
      } else if (String(logoUrl).indexOf('http') === -1) {
        userAvatar = addimgheader(logoUrl);
      } else {
        userAvatar = `${webUrl}/c/${forumCode}/get-avatar`;
      }
      return userAvatar;
    };
    // 绘制单行文本 - 需考虑截取长度
    // this.drawSingleLineText(context, color, textAlign, fontSize, fontWeigth, content, x, y);
    Vue.prototype.drawSingleLineText = (context, color, textAlign, fontSize, fontWeigth, content, x, y) => {
      context.fillStyle = color;
      context.textAlign = textAlign;
      context.font = `${fontWeigth} ${fontSize}px Arial `;
      context.fillText(content, x, y);
    };

    // 绘制多行文本
    // widht = Number(Math.round(window.screen.width * 0.9));
    // const SingleLength = Math.round(width / 12); 一个字的宽度
    // this.drawMultiLineText(context, color, textAlign, fontSize, fontWeigth, content, x, y, SingleLength, lineHeight);
    Vue.prototype.drawMultiLineText = (context, color, textAlign, fontSize, fontWeigth, content, x, y, SingleLength, lineHeight) => {
      context.textAlign = textAlign;
      context.font = `${fontWeigth} ${fontSize}px Arial `;
      context.fillStyle = color;
      const nameLength = String(content).length;
      for (let i = 0; i < nameLength; i += SingleLength) {
        context.fillText(`${content.slice(i, i + SingleLength)}`, x, y + lineHeight * (i / SingleLength))
      }
    };

    // 绘制圆形图片
    // this.drawCircularImg(context, canvas, img, x, y, r, callback);
    Vue.prototype.drawCircularImg = (context, canvas, img, x, y, r, callback) => {
      context.save();
      const d = 2 * r;
      const cx = x + r;
      const cy = y + r;
      context.strokeStyle = '#fff';
      context.lineWidth = 1;
      context.beginPath();
      context.arc(cx, cy, r, 0, 2 * Math.PI);
      context.stroke();
      context.clip();
      const avatar = new Image();
      if (String(webUrl) !== GetUrlMainPath(String(img))) {
        avatar.crossOrigin = 'Anonymous';
      }
      avatar.src = img;
      avatar.onload = () => {
        context.drawImage(avatar, x, y, d, d);
        context.restore();
        const callBack = callback ? callback() : null;
        if (callBack) {
          callBack();
        }
      };
      avatar.onerror = () => {
        alert('头像类型不支持，请重新上传');
        this.$router.push({ name: 'home' });
      };
    }

    // 绘制单张图片 方形
    // this.drawSingleImg(context, canvas, img, x, y, width, height, type, callback, imgScale);
    Vue.prototype.drawSingleImg = (context, canvas, img, x, y, width, height, type, callback, imgScale) => {
      const avatar = new Image();
      if (String(webUrl) !== GetUrlMainPath(String(img))) {
        avatar.crossOrigin = 'Anonymous';
      }
      avatar.src = img;
      avatar.onload = () => {
        const aw = avatar.width;
        const ah = avatar.height;
        // 1:1 取图片中间部分绘制;
        if (imgScale === 11) {
          if (aw !== ah) {
            if (aw < ah) {
              context.drawImage(avatar, 0, (ah - aw) / 2, aw, aw, x, y, width, height);
            }
            if (aw > ah) {
              context.drawImage(avatar, (aw - ah) / 2, 0, ah, ah, x, y, width, height);
            }
          } else {
            context.drawImage(avatar, x, y, width, height);
          }
        }
        // 4:3 取图片中间部分绘制
        if (imgScale === 43) {
          if ((aw / ah) !== (4 / 3)) {
            if ((aw / ah) < (4 / 3)) {
              context.drawImage(avatar, 0, (ah - 3 / 4 * aw) / 2, aw, 3 / 4 * aw, x, y, width, height);
            }
            if ((aw / ah) > (4 / 3)) {
              context.drawImage(avatar, (aw - 4 / 3 * ah) / 2, 0, 4 / 3 * ah, ah, x, y, width, height);
            }
          } else {
            context.drawImage(avatar, x, y, width, height);
          }
        }
        const callBack = callback ? callback() : null;
        if (callBack) {
          callBack();
        }
      };
      avatar.onerror = () => {
        alert(`${type}类型不支持，请重新上传`);
        this.$router.push({ name: 'home' });
      };
    };

    // 绘制圆角矩形
    // this.drawRoundRect(context, x, y, width, height, radius, color);
    Vue.prototype.drawRoundRect = (context, x, y, width, height, radius, color) => {
      context.beginPath();
      context.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
      context.lineTo(width - radius + x, y);
      context.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
      context.lineTo(width + x, height + y - radius);
      context.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
      context.lineTo(radius + x, height + y);
      context.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
      context.closePath();
      context.fillStyle = color;
      context.fill();
    };

    // 绘制多张图片
    // this.drawImgs(context, dpr, canvas, imgs, x, y, maxWidth);
    Vue.prototype.drawImgs = (context, dpr, canvas, imgs, x, y, maxWidth) => {
      const avatar = new Image();
      let index = 0;
      let imgWidth = 0;
      let imgHeight = 0;
      let imgY = 0;
      if (String(webUrl) !== GetUrlMainPath(String(imgs[index].filename))) {
        avatar.crossOrigin = 'Anonymous';
      }
      avatar.src = imgs[index].filename + '?imageMogr2/auto-orient'; // 自动旋转 七牛
      avatar.onload = () => {
        if (avatar.width < 260) {
          imgWidth = avatar.width * 2;
          imgHeight = avatar.height * 2;
        } else {
          imgWidth = maxWidth;
          imgHeight = avatar.height * maxWidth / avatar.width;
        }
        context.drawImage(avatar, x, y, imgWidth, imgHeight);
        // context.restore();
        index++;
        imgY = y + imgHeight + 10;
        if (index < imgs.length) {
          this.drawImgs(context, dpr, canvas, imgs, x, imgY, maxWidth);
        }
        if (index === imgs.length) {
          this.imgData = canvas.toDataURL();
          this.loading = false;
        }
      };
      avatar.onerror = () => {
        alert('图片类型不支持，请重新上传');
        this.$router.push({ name: 'home' });
      };
    };

    // 计算文字长度 - 仅限 汉字/字母/数字
    // this.getTextWidth(text, fontSize);
    Vue.prototype.getTextWidth = (text, fontSize) => {
      const chineseCharacter = /[\u4e00-\u9fa5]/g; // 汉字 w=h
      const Capital = /[A-Z]/g; // 大写字母
      const lowercase = /[a-z]/g; // 小写字母和数字
      const number = /[0-9]/g; // 小写字母和数字
      const cc = String(text).match(chineseCharacter);
      const cap = String(text).match(Capital);
      const low = String(text).match(lowercase);
      const num = String(text).match(number);
      let ccLength;
      let capLength;
      let lowLength;
      let numLength;
      if (cc) {
        ccLength = cc.join('').length;
      } else {
        ccLength = 0;
      }
      if (cap) {
        capLength = cap.join('').length;
      } else {
        capLength = 0;
      }
      if (low) {
        lowLength = low.join('').length;
      } else {
        lowLength = 0;
      }
      if (num) {
        numLength = num.join('').length;
      } else {
        numLength = 0;
      }
      const textLength = ccLength * fontSize + capLength * fontSize * 0.583 + lowLength * fontSize * 0.375 + numLength * fontSize * 0.55
      return textLength;
    };

    // this.drawCanvas(width, height, bgImg, callback);
    Vue.prototype.drawCanvasInitialization = (width, height, bgImg, callback) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!canvas.getContext) {
        window.alert('您的设备不支持canvas哦');
        return;
      }
      const dpr = 2; // 写的位置全部 * dpr
      canvas.width = width * dpr; // 520(260)
      canvas.height = height * dpr;
      canvas.style.width = width + 'px'; // 260
      canvas.style.height = height + 'px';

      const bg = new Image();
      if (String(webUrl) !== GetUrlMainPath(String(bgImg))) {
        bg.crossOrigin = 'Anonymous';
      }
      bg.src = bgImg;
      bg.onload = () => {
        const callBack = callback ? callback(canvas, context, bg) : null;
        if (callBack) {
          callBack();
        }
      };
    };

    // const drawCircularImg = () => {
    //   const toDataURL = () => {
    //     this.imgData = canvas.toDataURL('image/png');
    //     this.imgLoading = false;
    //   };
    //   this.drawCircularImg(context, canvas, this.user_avatar, canvas.width * 0.5 - 20 * 2, 78 * 2, 20 * 2, toDataURL);
    // };
  }
}
