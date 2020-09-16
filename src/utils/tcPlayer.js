function Tcplayer(idname, video_url, pic) {
  // console.log('创建播放', video_url);
  var player = new TcPlayer(idname, {
    m3u8:"http://ugcdx.qq.com/o0684ccgiea.mp4?sdtfrom=v1105&guid=e7482f913c34a19934614171373ee7c9&vkey=2912903C12DFCB3CC90252644D767E635340F8971C4563D47C5BEE983DFBE798B9198E557D67561575B8A6BA1AD93135F6B669ADB7C4655AAACCF286CA938FC4081B26355E42616A6DD1AF3DF52F993B6C2E2DEF8658C43A291CAFFBF566A0A15B49C634B9A8A4067437F0B2C5EC30D3C4C5049D437FB30756E8FE96EB9559EB", //请替换成实际可用的播放地址
    // autoplay : false,      //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
    // poster : pic,
    width: "100%", //视频的显示宽度，请尽量使用视频分辨率宽度
    height: "100%" //视频的显示高度，请尽量使用视频分辨率高度
  });
  return player;
}

export default Tcplayer;
