const $ = new Env("\u5E01\u56ED\u4E50\u4E48\u4E86\u997F".split("").reverse().join(""));
const {
  "\u0067\u0065\u0074\u0054\u006f\u006b\u0065\u006e": getToken,
  "\u0063\u0068\u0065\u0063\u006b\u0043\u006b": checkCk,
  "\u0077\u0061\u0069\u0074": wait,
  "\u0067\u0065\u0074\u0043\u006f\u006f\u006b\u0069\u0065\u0073": getCookies,
  "\u0067\u0065\u0074\u0055\u0073\u0065\u0072\u0049\u006e\u0066\u006f": getUserInfo,
  "\u0074\u0072\u0079\u0043\u0061\u0074\u0063\u0068\u0050\u0072\u006f\u006d\u0069\u0073\u0065": tryCatchPromise
} = require("sj.nommoc/.".split("").reverse().join(""));
const request = require("tseuqer".split("").reverse().join(""));
const md5 = require("\u006d\u0064\u0035");
function isEmpty(_0x591a20) {
  return Object["\u0076\u0061\u006c\u0075\u0065\u0073"](_0x591a20)['length'] === (0x5715c ^ 0x5715c);
}
async function lottery(_0x2a7333) {
  const _0x37f589 = {
    'authority': 'shopping.ele.me',
    "\u0061\u0063\u0063\u0065\u0070\u0074": 'application/json',
    'accept-language': "\u007a\u0068\u002d\u0043\u004e\u002c\u007a\u0068\u003b\u0071\u003d\u0030\u002e\u0039\u002c\u0065\u006e\u002d\u0055\u0053\u003b\u0071\u003d\u0030\u002e\u0038\u002c\u0065\u006e\u003b\u0071\u003d\u0030\u002e\u0037",
    "\u0063\u0061\u0063\u0068\u0065\u002d\u0063\u006f\u006e\u0074\u0072\u006f\u006c": "\u006e\u006f\u002d\u0063\u0061\u0063\u0068\u0065",
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://r.ele.me',
    'pragma': "\u006e\u006f\u002d\u0063\u0061\u0063\u0068\u0065",
    "\u0072\u0065\u0066\u0065\u0072\u0065\u0072": "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u002e\u0065\u006c\u0065\u002e\u006d\u0065\u002f\u006c\u0069\u006e\u006b\u0067\u0061\u006d\u0065\u002f\u0069\u006e\u0064\u0065\u0078\u002e\u0068\u0074\u006d\u006c\u003f\u006e\u0061\u0076\u0054\u0079\u0070\u0065\u003d\u0033\u0026\u0073\u0070\u006d\u002d\u0070\u0072\u0065\u003d\u0061\u0032\u006f\u0067\u0069\u002e\u0031\u0033\u0031\u0036\u0032\u0037\u0033\u0030\u002e\u007a\u0065\u0062\u0072\u0061\u002d\u0065\u006c\u0065\u002d\u006c\u006f\u0067\u0069\u006e\u002d\u006d\u006f\u0064\u0075\u006c\u0065\u002d\u0039\u0030\u0038\u0039\u0031\u0031\u0038\u0031\u0038\u0036\u0026\u0073\u0070\u006d\u003d\u0061\u0031\u0033\u002e\u0062\u005f\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u005f\u006b\u0062\u005f\u006d\u0037\u0031\u0032\u0039\u0033\u002e\u0030\u002e\u0030",
    'cookie': _0x2a7333,
    "\u0078\u002d\u0065\u006c\u0065\u002d\u0075\u0061": 'RenderWay/H5\x20AppName/wap\x20Mozilla/5.0\x20(Linux;\x20Android\x208.0.0;\x20SM-G955U\x20Build/R16NW)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/87.0.4280.141\x20Mobile\x20Safari/537.36',
    "\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074": 'Mozilla/5.0\x20(Linux;\x20Android\x208.0.0;\x20SM-G955U\x20Build/R16NW)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/87.0.4280.141\x20Mobile\x20Safari/537.36'
  };
  const _0x47799a = {
    "\u0061\u0063\u0074\u0049\u0064": '20221207144029906162546384',
    'collectionId': '20230224114656384938530468',
    "\u0063\u006f\u006d\u0070\u006f\u006e\u0065\u006e\u0074\u0049\u0064": "\u0032\u0030\u0032\u0033\u0030\u0032\u0032\u0034\u0031\u0031\u0034\u0038\u0032\u0035\u0032\u0031\u0036\u0033\u0037\u0033\u0033\u0036\u0037\u0039\u0039\u0038",
    "\u0062\u0069\u007a\u0053\u0063\u0065\u006e\u0065": 'game_center',
    'bizCode': "\u004c\u004f\u0054\u0054\u0045\u0052\u0059",
    'longitude': '120.21993197500706',
    "\u006c\u0061\u0074\u0069\u0074\u0075\u0064\u0065": '30.178378857672215',
    'asac': '2A232091VOX6SPEQYH6RG4',
    "\u0065\u0078\u0074\u0050\u0061\u0072\u0061\u006d\u0073": '{\x22bizType\x22:\x22LOTTERY\x22}'
  };
  const _0x5695ee = new Date()["\u0067\u0065\u0074\u0054\u0069\u006d\u0065"]();
  const _0x315936 = 0xbfdf0e;
  var _0x369abd = "=atad".split("").reverse().join("") + encodeURIComponent(JSON['stringify'](_0x47799a));
  const _0x881d98 = getToken(_0x2a7333);
  const _0x34e5a0 = _0x881d98['split']('_')[0x424e3 ^ 0x424e3];
  const _0x26d75a = md5(_0x34e5a0 + "\u0026" + _0x5695ee + '&' + _0x315936 + '&' + JSON['stringify'](_0x47799a));
  const _0x43bb72 = {
    "\u0075\u0072\u006c": "=t&87447521=yeKppa&1.6.2=vsj?/0.1/yrettol.thgir.mroftalp.retnecnoitcaretni.iebuok.potm/5h/moc.oaboat.m.sca-ediug//:sptth".split("").reverse().join("") + _0x5695ee + "\u0026\u0073\u0069\u0067\u006e\u003d" + _0x26d75a + "nosj=epyTatad&nosjlanigiro=epyt&0.1=v&yrettol.thgir.mroftalp.retnecnoitcaretni.iebuok.potm=ipa&".split("").reverse().join(""),
    'method': 'POST',
    'headers': _0x37f589,
    "\u0062\u006f\u0064\u0079": _0x369abd
  };
  return tryCatchPromise(_0x51ba78 => {
    request(_0x43bb72, async (_0x16ed8b, _0x409ead, _0x108964) => {
      if (!_0x16ed8b && _0x409ead["\u0073\u0074\u0061\u0074\u0075\u0073\u0043\u006f\u0064\u0065"] === (0x425be ^ 0x42576)) {
        try {
          const _0x13c6dc = JSON['parse'](_0x108964);
          if (isEmpty(_0x13c6dc["\u0064\u0061\u0074\u0061"]["\u0064\u0061\u0074\u0061"])) {
            console['log'](_0x13c6dc["\u0072\u0065\u0074"][0x1884c ^ 0x1884c]);
            _0x51ba78(![]);
          } else {
            if (_0x13c6dc['data']["\u0064\u0061\u0074\u0061"]['errorMsg']) {
              console['log'](_0x13c6dc['data']['data']["\u0065\u0072\u0072\u006f\u0072\u004d\u0073\u0067"]);
            } else {
              let _0x2f73eb = _0x13c6dc["\u0064\u0061\u0074\u0061"]["\u0064\u0061\u0074\u0061"]["\u0073\u0065\u006e\u0064\u0052\u0069\u0067\u0068\u0074\u004c\u0069\u0073\u0074"][0x485ae ^ 0x485ae];
              const _0x2880f0 = _0x2f73eb['materialInfo']["\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e"] + _0x2f73eb["\u006d\u0061\u0074\u0065\u0072\u0069\u0061\u006c\u0049\u006e\u0066\u006f"]["\u0074\u0069\u0074\u006c\u0065"];
              console["\u006c\u006f\u0067"](_0x2880f0);
            }
            _0x51ba78(_0x13c6dc);
          }
        } catch (_0x2f051a) {
          _0x51ba78(![]);
        }
      } else {
        _0x51ba78(![]);
      }
    });
  });
}
async function lyb_sign(_0x24cd86) {
  const _0x4ec66f = await checkCk(_0x24cd86);
  const _0xcfadee = {
    "\u0061\u0075\u0074\u0068\u006f\u0072\u0069\u0074\u0079": "\u006d\u0074\u006f\u0070\u002e\u0065\u006c\u0065\u002e\u006d\u0065",
    "\u0061\u0063\u0063\u0065\u0070\u0074": 'application/json',
    'accept-language': "\u007a\u0068\u002d\u0043\u004e\u002c\u007a\u0068\u003b\u0071\u003d\u0030\u002e\u0039\u002c\u0065\u006e\u002d\u0055\u0053\u003b\u0071\u003d\u0030\u002e\u0038\u002c\u0065\u006e\u003b\u0071\u003d\u0030\u002e\u0037",
    'asac': "\u0032\u0041\u0032\u0031\u0036\u0030\u0037\u004e\u0049\u0049\u0054\u0031\u004e\u0044\u0035\u0043\u0034\u0059\u0058\u004a\u0036\u0043",
    'cache-control': 'no-cache',
    "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065": 'application/x-www-form-urlencoded',
    "\u006f\u0072\u0069\u0067\u0069\u006e": 'https://tb.ele.me',
    "\u0070\u0072\u0061\u0067\u006d\u0061": "\u006e\u006f\u002d\u0063\u0061\u0063\u0068\u0065",
    "\u0072\u0065\u0066\u0065\u0072\u0065\u0072": 'https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login',
    "\u0063\u006f\u006f\u006b\u0069\u0065": _0x4ec66f,
    'user-agent': 'Mozilla/5.0\x20(Linux;\x20Android\x208.0.0;\x20SM-G955U\x20Build/R16NW)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/87.0.4280.141\x20Mobile\x20Safari/537.36'
  };
  const _0x502234 = new Date()['getTime']();
  const _0x165860 = 0xbfdf0e;
  const _0x57005c = {
    'bizScene': "\u0067\u0061\u006d\u0065\u005f\u0063\u0065\u006e\u0074\u0065\u0072",
    "\u0061\u0073\u0061\u0063": "\u0032\u0041\u0032\u0031\u0036\u0030\u0037\u004e\u0049\u0049\u0054\u0031\u004e\u0044\u0035\u0043\u0034\u0059\u0058\u004a\u0036\u0043",
    "\u0075\u006d\u0069\u0064\u0074\u006f\u006b\u0065\u006e": "@@bbcfa6a7ade8cb1546e9ee9b/dom/csla/wow/em.ele.bt//:sptth@@tuoemit htiw deliaf_daol_2nekoTtluafed".split("").reverse().join("") + _0x502234
  };
  var _0x436165 = "=atad".split("").reverse().join("") + encodeURIComponent(JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0x57005c));
  const _0x4d6ee1 = getToken(_0x4ec66f);
  const _0x26b3ee = _0x4d6ee1["\u0073\u0070\u006c\u0069\u0074"]('_')[0xcaaba ^ 0xcaaba];
  const _0x4ee849 = md5(_0x26b3ee + "\u0026" + _0x502234 + '&' + _0x165860 + "\u0026" + JSON['stringify'](_0x57005c));
  const _0x3db8af = {
    'url': "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006d\u0074\u006f\u0070\u002e\u0065\u006c\u0065\u002e\u006d\u0065\u002f\u0068\u0035\u002f\u006d\u0074\u006f\u0070\u002e\u006b\u006f\u0075\u0062\u0065\u0069\u002e\u0069\u006e\u0074\u0065\u0072\u0061\u0063\u0074\u0069\u006f\u006e\u0063\u0065\u006e\u0074\u0065\u0072\u002e\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d\u0070\u006f\u006e\u0065\u006e\u0074\u002e\u0072\u0065\u0063\u006f\u0072\u0064\u0073\u0069\u0067\u006e\u0069\u006e\u002f\u0031\u002e\u0030\u002f\u0035\u002e\u0030\u002f\u003f\u006a\u0073\u0076\u003d\u0032\u002e\u0037\u002e\u0031\u0026\u0061\u0070\u0070\u004b\u0065\u0079\u003d\u0031\u0032\u0035\u0037\u0034\u0034\u0037\u0038\u0026\u0074\u003d" + _0x502234 + '&sign=' + _0x4ee849 + "141.0824.0.78_emorhc_diordna04%5h=dittces&C6JXY4C5DN1TIIN70612A2=casa&0.5=VS&pnosj=epyTatad&eurt=tseuqeRnigoL&eurt=nigoLdeen&gnirts=epyTeulav&nosj=epyt&1=edoce&0.1=v&ningisdrocer.tnenopmoc.ngis.retnecnoitcaretni.iebuok.potm=ipa&".split("").reverse().join(""),
    "\u006d\u0065\u0074\u0068\u006f\u0064": "\u0050\u004f\u0053\u0054",
    'headers': _0xcfadee,
    'body': _0x436165
  };
  return tryCatchPromise(_0x203200 => {
    request(_0x3db8af, async (_0x272115, _0x1c441d, _0x179163) => {
      if (!_0x272115 && _0x1c441d['statusCode'] == (0x7267b ^ 0x726b3)) {
        const _0x533317 = JSON['parse'](_0x179163);
        if (_0x533317['data']['errorMsg']) {
          console['log'](_0x533317['data']['errorMsg']);
        } else {
          console['log']("\u529F\u6210\u5230\u7B7E".split("").reverse().join(""));
        }
        _0x203200(_0x533317);
      } else {
        _0x203200(null);
      }
    });
  });
}
async function lyb_llk_token(_0x439987) {
  const _0x2f601c = {
    'bizScene': 'LIANLIANKAN',
    'bizMethod': 'login',
    'bizParam': '{\x22inviterId\x22:null,\x22gameId\x22:null,\x22token\x22:\x22token\x22}',
    'longitude': 114.174328,
    'latitude': 22.316555
  };
  const _0x470dc0 = await gameRequest(_0x439987, _0x2f601c);
  return _0x470dc0['data']['token'];
}
async function lyb_llk_gamecode(_0x38c94c, _0x245e6e) {
  const _0x273bc4 = {
    "\u0062\u0069\u007a\u0053\u0063\u0065\u006e\u0065": 'LIANLIANKAN',
    'bizMethod': 'startGameV2',
    'bizParam': '{\x22gameId\x22:null,\x22token\x22:\x22' + _0x245e6e + '\x22}',
    'longitude': 114.174328,
    'latitude': 22.316555
  };
  const _0x8b94cf = await gameRequest(_0x38c94c, _0x273bc4);
  if (_0x8b94cf['bizErrorMsg'] != 'success') {
    console['log'](_0x8b94cf['bizErrorMsg']);
    return null;
  }
  return _0x8b94cf["\u0064\u0061\u0074\u0061"]['gameCode'];
}
async function lyb_llk_passgame(_0xf45113, _0x38b9fe, _0x5456b3) {
  const _0x2d9a39 = {
    "\u0062\u0069\u007a\u0053\u0063\u0065\u006e\u0065": "\u004c\u0049\u0041\u004e\u004c\u0049\u0041\u004e\u004b\u0041\u004e",
    'bizMethod': 'settlement',
    'bizParam': "\":\"edoCemag\"{".split("").reverse().join("") + _0x38b9fe + "\":\"nekot\",llun:\"dIemag\",15304:\"emiTleveLssap\",\"".split("").reverse().join("") + _0x5456b3 + '\x22}'
  };
  const _0x32ca44 = await gameRequest(_0xf45113, _0x2d9a39);
  if (_0x32ca44['bizErrorMsg'] != 'success') {
    console['log'](_0x32ca44['bizErrorMsg']);
    return null;
  }
  return _0x32ca44['data']['lastLevelId'];
}
async function gameRequest(_0x5c4a15, _0x293db2) {
  const _0x1de928 = {
    "\u0061\u0075\u0074\u0068\u006f\u0072\u0069\u0074\u0079": 'shopping.ele.me',
    "\u0061\u0063\u0063\u0065\u0070\u0074": 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'no-cache',
    "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u0078\u002d\u0077\u0077\u0077\u002d\u0066\u006f\u0072\u006d\u002d\u0075\u0072\u006c\u0065\u006e\u0063\u006f\u0064\u0065\u0064",
    'origin': 'https://r.ele.me',
    'pragma': 'no-cache',
    'referer': 'https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0',
    'cookie': _0x5c4a15,
    'x-ele-ua': 'RenderWay/H5\x20AppName/wap\x20Mozilla/5.0\x20(Linux;\x20Android\x208.0.0;\x20SM-G955U\x20Build/R16NW)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/87.0.4280.141\x20Mobile\x20Safari/537.36',
    'user-agent': 'Mozilla/5.0\x20(Linux;\x20Android\x208.0.0;\x20SM-G955U\x20Build/R16NW)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/87.0.4280.141\x20Mobile\x20Safari/537.36'
  };
  const _0x34fa44 = new Date()["\u0067\u0065\u0074\u0054\u0069\u006d\u0065"]();
  const _0x173b76 = 0xbfdf0e;
  var _0x5976a2 = "=atad".split("").reverse().join("") + encodeURIComponent(JSON['stringify'](_0x293db2));
  const _0x4e9995 = getToken(_0x5c4a15);
  const _0x3f9a68 = _0x4e9995['split']('_')[0x0];
  const _0x282679 = md5(_0x3f9a68 + '&' + _0x34fa44 + '&' + _0x173b76 + "\u0026" + JSON['stringify'](_0x293db2));
  const _0x2e5dc4 = {
    'url': 'https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=' + _0x34fa44 + '&sign=' + _0x282679 + '&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0',
    'method': 'POST',
    'headers': _0x1de928,
    'body': _0x5976a2
  };
  return tryCatchPromise(_0x57f3b2 => {
    request(_0x2e5dc4, async (_0x5bbc13, _0x42298e, _0x37c3cc) => {
      if (!_0x5bbc13 && _0x42298e['statusCode'] == (0xa5b85 ^ 0xa5b4d)) {
        try {
          const _0x470bb4 = JSON['parse'](_0x37c3cc);
          const _0x87f7ce = JSON['parse'](_0x470bb4['data']["\u0064\u0061\u0074\u0061"]);
          _0x57f3b2(_0x87f7ce);
        } catch (_0x396c6a) {
          console['log'](_0x37c3cc);
          _0x57f3b2(null);
        }
      } else {
        _0x57f3b2(null);
      }
    });
  });
}
async function llk_game(_0x25bfaf, _0x3cbc40) {
  const _0x5e5e02 = await lyb_llk_gamecode(_0x25bfaf, _0x3cbc40);
  if (_0x5e5e02) {
    let _0x49e6f6 = await lyb_llk_passgame(_0x25bfaf, _0x5e5e02, _0x3cbc40);
    console['log']('连连看第' + _0x49e6f6 + '关闯关成功');
    console['log']('随机等待5-10s');
    await wait(getRandom(0x5, 0xa));
    if (_0x49e6f6 === 0x3) {
      return;
    } else {
      await llk_game(_0x25bfaf, _0x3cbc40);
    }
  } else {
    console['log']("\u8FC7\u6210\u5B8C\u5DF2\u770B\u8FDE\u8FDE".split("").reverse().join(""));
  }
}
async function water_login(_0x1f943d) {
  const _0x22a643 = {
    "\u0062\u0069\u007a\u0053\u0063\u0065\u006e\u0065": 'WATER_SORT',
    'bizParam': '{\x22type\x22:\x22login\x22}',
    'bizMethod': 'login'
  };
  const _0x2d2d31 = await gameRequest(_0x1f943d, _0x22a643);
  return _0x2d2d31;
}
async function water_game_success(_0x5605a4) {
  const _0x320ec5 = {
    'bizScene': "\u0057\u0041\u0054\u0045\u0052\u005f\u0053\u004f\u0052\u0054",
    'bizParam': '{\x22type\x22:\x22gameSuccess\x22}',
    'bizMethod': 'gameSuccess'
  };
  const _0x3d4a5f = await gameRequest(_0x5605a4, _0x320ec5);
  return _0x3d4a5f;
}
async function water_reward(_0x381a2a, _0x45fe93) {
  const _0x5b7071 = {
    'bizScene': 'WATER_SORT',
    'bizParam': '{\x22type\x22:\x22getPassPrize\x22,\x22data\x22:{\x22addNum\x22:\x22' + _0x45fe93 + "}}1:\"epyt\",\"".split("").reverse().join(""),
    'bizMethod': 'getPassPrize'
  };
  const _0x2a1757 = await gameRequest(_0x381a2a, _0x5b7071);
  return _0x2a1757;
}
async function water_game(_0x3ee10c) {
  const _0x27e9b3 = await water_login(_0x3ee10c);
  const _0x50f5a3 = _0x27e9b3['passConf'];
  const _0x50e194 = [];
  for (let _0x3ac6d8 of Object['values'](_0x50f5a3)) {
    _0x50e194['push'](_0x3ac6d8['passNum']);
  }
  var _0x55c700 = await water_game_success(_0x3ee10c);
  var _0x194b12 = _0x55c700['info']['todayPass'];
  var _0x4ba1ef = 0x0;
  while (_0x194b12 <= _0x50e194[_0x50e194["\u006c\u0065\u006e\u0067\u0074\u0068"] - 0x1]) {
    _0x55c700 = await water_game_success(_0x3ee10c);
    _0x194b12 = _0x55c700['info']["\u0074\u006f\u0064\u0061\u0079\u0050\u0061\u0073\u0073"];
    console['log']("\u6b22\u4e50\u5012\u6c34\u7b2c" + _0x194b12 + '关闯关成功');
    if (_0x50e194['includes'](_0x194b12)) {
      _0x4ba1ef = _0x50e194['indexOf'](_0x194b12) + (0x263ae ^ 0x263af);
      const _0x499012 = await water_reward(_0x3ee10c, _0x4ba1ef);
      console['log']("\uFF1A\u5F97\u83B7".split("").reverse().join("") + _0x499012['goldnum'] + "\u5E01\u56ED\u4E50".split("").reverse().join(""));
    }
  }
  console['log']("\u6210\u5B8C\u5173\u95EF\u6C34\u5012\u4E50\u5FEB".split("").reverse().join(""));
}
async function start() {
  const _0x1612bb = getCookies();
  for (let _0x18c297 = 0x0; _0x18c297 < _0x1612bb['length']; _0x18c297++) {
    const _0x5ed52b = _0x1612bb[_0x18c297];
    if (!_0x5ed52b) {
      console['log']('\x20❌无效用户信息,\x20请重新获取ck');
    } else {
      try {
        let _0xaeedd3 = await checkCk(_0x5ed52b, _0x18c297);
        if (!_0xaeedd3) {
          continue;
        }
        let _0x55835b = await getUserInfo(_0xaeedd3);
        if (!_0x55835b['username']) {
          console["\u006c\u006f\u0067"]("\u7b2c", _0x18c297 + 0x1, "\uDE2D\uD83D\uFF01\uFF01\uFF01\u5F55\u767B\u65B0\u91CD\u8BF7\uFF01\u6548\u5931\u53F7\u8D26".split("").reverse().join(""));
          continue;
        }
        const _0x266e75 = _0x55835b['user_id'];
        console['log']("\u53F7\u8D26\u4E48\u4E86\u997F\u3010\u59CB\u5F00******".split("").reverse().join(""), _0x18c297 + (0x66f1e ^ 0x66f1f), "\u3011", _0x55835b['username'], "*********".split("").reverse().join(""));
        await lyb_sign(_0xaeedd3);
        await lottery(_0xaeedd3);
        const _0x402827 = await lyb_llk_token(_0xaeedd3);
        await llk_game(_0xaeedd3, _0x402827);
        await llk_game(_0xaeedd3, _0x402827);
        await water_game(_0xaeedd3);
        console['log']("\u5E05\u6700\u79E6\u8001".split("").reverse().join(""));
        await wait(getRandom(0x5, 0xa));
      } catch (_0x54faf5) {
        console['log'](_0x54faf5);
      }
    }
  }
  process['exit'](0x0);
}
start();
function getRandom(_0x3bfe5c, _0x38370c) {
  return Math['floor'](Math["\u0072\u0061\u006e\u0064\u006f\u006d"]() * (_0x38370c - _0x3bfe5c + 0x1) + _0x3bfe5c);
}
function Env(_0x1759e6, _0x1c342e) {
  if ("denifednu".split("").reverse().join("") != typeof process && JSON['stringify'](process['env'])['indexOf']('GITHUB') > -(0xee163 ^ 0xee162)) {
    process['exit'](0x87ef4 ^ 0x87ef4);
  }
  class _0x5b3a29 {
    constructor(_0x282ebc) {
      this['env'] = _0x282ebc;
    }
    ["dnes".split("").reverse().join("")](_0x2629a2, _0x211493 = "TEG".split("").reverse().join("")) {
      if ("gnirts".split("").reverse().join("") == typeof _0x2629a2) {
        _0x2629a2 = {
          'url': _0x2629a2
        };
      } else {
        _0x2629a2 = _0x2629a2;
      }
      let _0x5a2f16 = this['get'];
      if ('POST' === _0x211493) {
        _0x5a2f16 = this['post'];
      }
      return new Promise((_0x178f13, _0x51b2d5) => {
        _0x5a2f16['call'](this, _0x2629a2, (_0x22a257, _0x4e7aa2, _0x4fc604) => {
          if (_0x22a257) {
            _0x51b2d5(_0x22a257);
          } else {
            _0x178f13(_0x4e7aa2);
          }
        });
      });
    }
    ['get'](_0x291e00) {
      return this['send']["\u0063\u0061\u006c\u006c"](this['env'], _0x291e00);
    }
    ['post'](_0x165de7) {
      return this['send']['call'](this['env'], _0x165de7, 'POST');
    }
  }
  return new class {
    constructor(_0x3a94a2, _0x19b7e2) {
      this['name'] = _0x3a94a2;
      this['http'] = new _0x5b3a29(this);
      this['data'] = null;
      this['dataFile'] = "tad.xob".split("").reverse().join("");
      this['logs'] = [];
      this['isMute'] = !(0xa818d ^ 0xa818c);
      this["\u0069\u0073\u004e\u0065\u0065\u0064\u0052\u0065\u0077\u0072\u0069\u0074\u0065"] = !(0x71b15 ^ 0x71b14);
      this['logSeparator'] = '\x0a';
      this['startTime'] = new Date()['getTime']();
      Object['assign'](this, _0x19b7e2);
      this["\u006c\u006f\u0067"]('', "\uDD14\uD83D".split("").reverse().join("") + this['name'] + ',\x20开始!');
    }
    ['isNode']() {
      return 'undefined' != typeof module && !!module['exports'];
    }
    ['isQuanX']() {
      return "denifednu".split("").reverse().join("") != typeof $task;
    }
    ['isSurge']() {
      return 'undefined' != typeof $httpClient && 'undefined' == typeof $loon;
    }
    ["nooLsi".split("").reverse().join("")]() {
      return 'undefined' != typeof $loon;
    }
    ["jbOot".split("").reverse().join("")](_0x564fe, _0x5d93da = null) {
      try {
        return JSON['parse'](_0x564fe);
      } catch {
        return _0x5d93da;
      }
    }
    ['toStr'](_0x369925, _0x335381 = null) {
      try {
        return JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0x369925);
      } catch {
        return _0x335381;
      }
    }
    ["nosjteg".split("").reverse().join("")](_0x213f5b, _0xc5b94e) {
      let _0x39d3cb = _0xc5b94e;
      const _0x296ff6 = this['getdata'](_0x213f5b);
      if (_0x296ff6) {
        try {
          _0x39d3cb = JSON['parse'](this['getdata'](_0x213f5b));
        } catch {}
      }
      return _0x39d3cb;
    }
    ['setjson'](_0x4932e3, _0x2ecc6e) {
      try {
        return this['setdata'](JSON['stringify'](_0x4932e3), _0x2ecc6e);
      } catch {
        return !(0x2c927 ^ 0x2c926);
      }
    }
    ['getScript'](_0x1a32d1) {
      return new Promise(_0x1d598b => {
        this['get']({
          'url': _0x1a32d1
        }, (_0x532d08, _0x44a9f8, _0x3a17f3) => _0x1d598b(_0x3a17f3));
      });
    }
    ['runScript'](_0x469436, _0x6dc920) {
      return new Promise(_0x2f9842 => {
        let _0x3d519d = this['getdata']("ipaptth.sgfCresu_sjxob_yvahc@".split("").reverse().join(""));
        if (_0x3d519d) {
          _0x3d519d = _0x3d519d['replace'](/\n/g, '')['trim']();
        } else {
          _0x3d519d = _0x3d519d;
        }
        let _0xb150d4 = this["\u0067\u0065\u0074\u0064\u0061\u0074\u0061"]("\u0040\u0063\u0068\u0061\u0076\u0079\u005f\u0062\u006f\u0078\u006a\u0073\u005f\u0075\u0073\u0065\u0072\u0043\u0066\u0067\u0073\u002e\u0068\u0074\u0074\u0070\u0061\u0070\u0069\u005f\u0074\u0069\u006d\u0065\u006f\u0075\u0074");
        if (_0xb150d4) {
          _0xb150d4 = 0x1 * _0xb150d4;
        } else {
          _0xb150d4 = 0x14;
        }
        if (_0x6dc920 && _0x6dc920['timeout']) {
          _0xb150d4 = _0x6dc920['timeout'];
        } else {
          _0xb150d4 = _0xb150d4;
        }
        const [_0x9bcfd0, _0x533f9c] = _0x3d519d['split']('@'),
          _0x388212 = {
            'url': "\u0068\u0074\u0074\u0070\u003a\u002f\u002f" + _0x533f9c + "etaulave/gnitpircs/1v/".split("").reverse().join(""),
            'body': {
              'script_text': _0x469436,
              'mock_type': 'cron',
              'timeout': _0xb150d4
            },
            'headers': {
              'X-Key': _0x9bcfd0,
              "\u0041\u0063\u0063\u0065\u0070\u0074": '*/*'
            }
          };
        this["\u0070\u006f\u0073\u0074"](_0x388212, (_0x50b05c, _0x7a22f8, _0xa79ec2) => _0x2f9842(_0xa79ec2));
      })['catch'](_0x4a3d21 => this['logErr'](_0x4a3d21));
    }
    ["ataddaol".split("").reverse().join("")]() {
      if (!this["\u0069\u0073\u004e\u006f\u0064\u0065"]()) {
        return {};
      }
      if (this['fs']) {
        this['fs'] = this['fs'];
      } else {
        this['fs'] = require("sf".split("").reverse().join(""));
      }
      if (this['path']) {
        this['path'] = this['path'];
      } else {
        this['path'] = require('path');
      }
      const _0x1b9854 = this['path']['resolve'](this['dataFile']),
        _0x577cd7 = this['path']['resolve'](process['cwd'](), this['dataFile']),
        _0xb95263 = this['fs']["\u0065\u0078\u0069\u0073\u0074\u0073\u0053\u0079\u006e\u0063"](_0x1b9854),
        _0x10fb39 = !_0xb95263 && this["\u0066\u0073"]['existsSync'](_0x577cd7);
      if (!_0xb95263 && !_0x10fb39) {
        return {};
      }
      const _0x343a27 = _0xb95263 ? _0x1b9854 : _0x577cd7;
      try {
        return JSON['parse'](this["\u0066\u0073"]['readFileSync'](_0x343a27));
      } catch (_0x3e606f) {
        return {};
      }
    }
    ['writedata']() {
      if (this['isNode']()) {
        this['fs'] ? this['fs'] = this["\u0066\u0073"] : this['fs'] = require("\u0066\u0073");
        this['path'] ? this['path'] = this['path'] : this['path'] = require('path');
        const _0x18f8dd = this['path']["\u0072\u0065\u0073\u006f\u006c\u0076\u0065"](this['dataFile']),
          _0x51f039 = this['path']['resolve'](process['cwd'](), this['dataFile']),
          _0x421d4c = this['fs']['existsSync'](_0x18f8dd),
          _0x4892e0 = !_0x421d4c && this["\u0066\u0073"]['existsSync'](_0x51f039),
          _0x1003bb = JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](this['data']);
        _0x421d4c ? this['fs']['writeFileSync'](_0x18f8dd, _0x1003bb) : _0x4892e0 ? this['fs']["\u0077\u0072\u0069\u0074\u0065\u0046\u0069\u006c\u0065\u0053\u0079\u006e\u0063"](_0x51f039, _0x1003bb) : this['fs']['writeFileSync'](_0x18f8dd, _0x1003bb);
      }
    }
    ['lodash_get'](_0x1f9ec4, _0x2d0253, _0x3d7e0f) {
      const _0x4ab606 = _0x2d0253['replace'](/\[(\d+)\]/g, "\u002e\u0024\u0031")['split']('.');
      let _0x5999bb = _0x1f9ec4;
      for (const _0x11ce7e of _0x4ab606) if (_0x5999bb = Object(_0x5999bb)[_0x11ce7e], (0xb81cd ^ 0xb81cd) === _0x5999bb) {
        return _0x3d7e0f;
      }
      return _0x5999bb;
    }
    ['lodash_set'](_0x1e13e2, _0x59323f, _0x5cc069) {
      return Object(_0x1e13e2) !== _0x1e13e2 ? _0x1e13e2 : (Array['isArray'](_0x59323f) || (_0x59323f = _0x59323f['toString']()['match'](/[^.[\]]+/g) || []), _0x59323f['slice'](0x9da0c ^ 0x9da0c, -(0xd7e78 ^ 0xd7e79))['reduce']((_0x153855, _0x1c3b5c, _0x46ba72) => Object(_0x153855[_0x1c3b5c]) === _0x153855[_0x1c3b5c] ? _0x153855[_0x1c3b5c] : Math['abs'](_0x59323f[_0x46ba72 + 0x1]) >> (0x6a90a ^ 0x6a90a) == +_0x59323f[_0x46ba72 + 0x1] ? _0x153855[_0x1c3b5c] = [] : _0x153855[_0x1c3b5c] = {}, _0x1e13e2)[_0x59323f[_0x59323f['length'] - 0x1]] = _0x5cc069, _0x1e13e2);
    }
    ["atadteg".split("").reverse().join("")](_0x240af6) {
      let _0x10c0c4 = this['getval'](_0x240af6);
      if (/^@/['test'](_0x240af6)) {
        const [, _0x2a0326, _0x3ed8fc] = /^@(.*?)\.(.*?)$/['exec'](_0x240af6),
          _0x403016 = _0x2a0326 ? this["\u0067\u0065\u0074\u0076\u0061\u006c"](_0x2a0326) : '';
        if (_0x403016) {
          try {
            const _0x553144 = JSON['parse'](_0x403016);
            _0x553144 ? _0x10c0c4 = this['lodash_get'](_0x553144, _0x3ed8fc, '') : _0x10c0c4 = _0x10c0c4;
          } catch (_0x51e0be) {
            _0x10c0c4 = '';
          }
        }
      }
      return _0x10c0c4;
    }
    ["atadtes".split("").reverse().join("")](_0x513e5c, _0x45ebf3) {
      let _0x46e2c4 = !0x1;
      if (/^@/["\u0074\u0065\u0073\u0074"](_0x45ebf3)) {
        const [, _0x511ac3, _0x4bf58f] = /^@(.*?)\.(.*?)$/['exec'](_0x45ebf3),
          _0x55021c = this['getval'](_0x511ac3),
          _0x29d2a3 = _0x511ac3 ? 'null' === _0x55021c ? null : _0x55021c || "\u007b\u007d" : '{}';
        try {
          const _0x2eb991 = JSON["\u0070\u0061\u0072\u0073\u0065"](_0x29d2a3);
          this["\u006c\u006f\u0064\u0061\u0073\u0068\u005f\u0073\u0065\u0074"](_0x2eb991, _0x4bf58f, _0x513e5c);
          _0x46e2c4 = this['setval'](JSON['stringify'](_0x2eb991), _0x511ac3);
        } catch (_0x421fd6) {
          const _0x327cf2 = {};
          this['lodash_set'](_0x327cf2, _0x4bf58f, _0x513e5c);
          _0x46e2c4 = this['setval'](JSON['stringify'](_0x327cf2), _0x511ac3);
        }
      } else {
        _0x46e2c4 = this['setval'](_0x513e5c, _0x45ebf3);
      }
      return _0x46e2c4;
    }
    ['getval'](_0x4f8fb2) {
      return this['isSurge']() || this['isLoon']() ? $persistentStore['read'](_0x4f8fb2) : this['isQuanX']() ? $prefs['valueForKey'](_0x4f8fb2) : this['isNode']() ? (this['data'] = this['loaddata'](), this['data'][_0x4f8fb2]) : this['data'] && this['data'][_0x4f8fb2] || null;
    }
    ["\u0073\u0065\u0074\u0076\u0061\u006c"](_0x171167, _0x5820be) {
      return this['isSurge']() || this["\u0069\u0073\u004c\u006f\u006f\u006e"]() ? $persistentStore['write'](_0x171167, _0x5820be) : this['isQuanX']() ? $prefs['setValueForKey'](_0x171167, _0x5820be) : this['isNode']() ? (this['data'] = this["\u006c\u006f\u0061\u0064\u0064\u0061\u0074\u0061"](), this['data'][_0x5820be] = _0x171167, this['writedata'](), !0x0) : this['data'] && this['data'][_0x5820be] || null;
    }
    ['initGotEnv'](_0x2f50b9) {
      this['got'] ? this['got'] = this['got'] : this['got'] = require('got');
      this['cktough'] ? this['cktough'] = this['cktough'] : this['cktough'] = require('tough-cookie');
      this['ckjar'] ? this['ckjar'] = this['ckjar'] : this['ckjar'] = new this['cktough']['CookieJar']();
      if (_0x2f50b9) {
        _0x2f50b9['headers'] ? _0x2f50b9['headers'] = _0x2f50b9['headers'] : _0x2f50b9['headers'] = {};
        0x0 === _0x2f50b9['headers']['Cookie'] && 0x0 === _0x2f50b9['cookieJar'] && (_0x2f50b9['cookieJar'] = this['ckjar']);
      }
    }
    ['get'](_0x47278e, _0x9411e8 = () => {}) {
      if (_0x47278e['headers']) {
        delete _0x47278e["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"]['Content-Type'];
        delete _0x47278e['headers']['Content-Length'];
      }
      this['isSurge']() || this['isLoon']() ? (this['isSurge']() && this['isNeedRewrite'] && (_0x47278e['headers'] = _0x47278e['headers'] || {}, Object['assign'](_0x47278e['headers'], {
        'X-Surge-Skip-Scripting': !0x1
      })), $httpClient['get'](_0x47278e, (_0x27cad1, _0x20b0c4, _0x55a96d) => {
        if (!_0x27cad1 && _0x20b0c4) {
          _0x20b0c4['body'] = _0x55a96d;
          _0x20b0c4["\u0073\u0074\u0061\u0074\u0075\u0073\u0043\u006f\u0064\u0065"] = _0x20b0c4['status'];
        }
        _0x9411e8(_0x27cad1, _0x20b0c4, _0x55a96d);
      })) : this['isQuanX']() ? (this["\u0069\u0073\u004e\u0065\u0065\u0064\u0052\u0065\u0077\u0072\u0069\u0074\u0065"] && (_0x47278e['opts'] = _0x47278e['opts'] || {}, Object['assign'](_0x47278e['opts'], {
        'hints': !0x1
      })), $task['fetch'](_0x47278e)['then'](_0x51ae77 => {
        const {
          statusCode: _0x17ad06,
          statusCode: _0x505c7f,
          headers: _0xfc4036,
          body: _0x29ad7f
        } = _0x51ae77;
        _0x9411e8(null, {
          'status': _0x17ad06,
          'statusCode': _0x505c7f,
          'headers': _0xfc4036,
          'body': _0x29ad7f
        }, _0x29ad7f);
      }, _0x3aa23d => _0x9411e8(_0x3aa23d))) : this['isNode']() && (this['initGotEnv'](_0x47278e), this['got'](_0x47278e)['on']('redirect', (_0x351234, _0x1c27f7) => {
        try {
          if (_0x351234['headers']["\u0073\u0065\u0074\u002d\u0063\u006f\u006f\u006b\u0069\u0065"]) {
            const _0x368c7a = _0x351234['headers']['set-cookie']['map'](this['cktough']['Cookie']['parse'])['toString']();
            if (_0x368c7a) {
              this["\u0063\u006b\u006a\u0061\u0072"]['setCookieSync'](_0x368c7a, null);
            }
            _0x1c27f7['cookieJar'] = this['ckjar'];
          }
        } catch (_0x3a1ff1) {
          this['logErr'](_0x3a1ff1);
        }
      })['then'](_0x2ae1a3 => {
        const {
          statusCode: _0x25f1b0,
          statusCode: _0x432dd4,
          headers: _0x4d4db8,
          body: _0x1dbcd7
        } = _0x2ae1a3;
        _0x9411e8(null, {
          'status': _0x25f1b0,
          'statusCode': _0x432dd4,
          'headers': _0x4d4db8,
          'body': _0x1dbcd7
        }, _0x1dbcd7);
      }, _0x2236c7 => {
        const {
          message: _0x2d973b,
          response: _0x2c4c24
        } = _0x2236c7;
        _0x9411e8(_0x2d973b, _0x2c4c24, _0x2c4c24 && _0x2c4c24['body']);
      }));
    }
    ['post'](_0x5b81c8, _0x2e6bc8 = () => {}) {
      if (_0x5b81c8['body'] && _0x5b81c8['headers'] && !_0x5b81c8['headers']['Content-Type']) {
        _0x5b81c8['headers']['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      if (_0x5b81c8['headers']) {
        delete _0x5b81c8['headers']['Content-Length'];
      }
      if (this['isSurge']() || this['isLoon']()) {
        if (this['isSurge']() && this['isNeedRewrite']) {
          _0x5b81c8['headers'] = _0x5b81c8['headers'] || {};
          Object['assign'](_0x5b81c8['headers'], {
            'X-Surge-Skip-Scripting': !0x1
          });
        }
        $httpClient['post'](_0x5b81c8, (_0xfa8f5c, _0x3edb78, _0x3f4afa) => {
          if (!_0xfa8f5c && _0x3edb78) {
            _0x3edb78['body'] = _0x3f4afa;
            _0x3edb78['statusCode'] = _0x3edb78['status'];
          }
          _0x2e6bc8(_0xfa8f5c, _0x3edb78, _0x3f4afa);
        });
      } else {
        if (this['isQuanX']()) {
          _0x5b81c8['method'] = "\u0050\u004f\u0053\u0054";
          if (this['isNeedRewrite']) {
            _0x5b81c8['opts'] = _0x5b81c8['opts'] || {};
            Object['assign'](_0x5b81c8['opts'], {
              'hints': !0x1
            });
          }
          $task['fetch'](_0x5b81c8)['then'](_0x3d3b9e => {
            const {
              statusCode: _0x5876fd,
              statusCode: _0x395fb7,
              headers: _0x261e3b,
              body: _0xce0ad4
            } = _0x3d3b9e;
            _0x2e6bc8(null, {
              'status': _0x5876fd,
              'statusCode': _0x395fb7,
              'headers': _0x261e3b,
              'body': _0xce0ad4
            }, _0xce0ad4);
          }, _0xb2bafd => _0x2e6bc8(_0xb2bafd));
        } else {
          if (this['isNode']()) {
            this['initGotEnv'](_0x5b81c8);
            const {
              url: _0x3d5f56,
              ..._0x513aa0
            } = _0x5b81c8;
            this['got']['post'](_0x3d5f56, _0x513aa0)['then'](_0xf5af63 => {
              const {
                statusCode: _0x4c7950,
                statusCode: _0x53056c,
                headers: _0x5b3aa0,
                body: _0x2f8aa9
              } = _0xf5af63;
              _0x2e6bc8(null, {
                'status': _0x4c7950,
                'statusCode': _0x53056c,
                'headers': _0x5b3aa0,
                'body': _0x2f8aa9
              }, _0x2f8aa9);
            }, _0x191896 => {
              const {
                message: _0x155c37,
                response: _0x13a0ee
              } = _0x191896;
              _0x2e6bc8(_0x155c37, _0x13a0ee, _0x13a0ee && _0x13a0ee['body']);
            });
          }
        }
      }
    }
    ['time'](_0x3175c3, _0x4fe252 = null) {
      const _0x34d93c = _0x4fe252 ? new Date(_0x4fe252) : new Date();
      let _0x27cae4 = {
        'M+': _0x34d93c['getMonth']() + (0x73302 ^ 0x73303),
        'd+': _0x34d93c['getDate'](),
        'H+': _0x34d93c['getHours'](),
        'm+': _0x34d93c['getMinutes'](),
        's+': _0x34d93c['getSeconds'](),
        'q+': Math['floor']((_0x34d93c['getMonth']() + 0x3) / 0x3),
        'S': _0x34d93c['getMilliseconds']()
      };
      if (/(y+)/['test'](_0x3175c3)) {
        _0x3175c3 = _0x3175c3['replace'](RegExp['$1'], (_0x34d93c['getFullYear']() + "".split("").reverse().join(""))['substr'](0x4 - RegExp['$1']['length']));
      }
      for (let _0x2aa5eb in _0x27cae4) if (new RegExp('(' + _0x2aa5eb + ')')['test'](_0x3175c3)) {
        _0x3175c3 = _0x3175c3['replace'](RegExp['$1'], 0x1 == RegExp['$1']["\u006c\u0065\u006e\u0067\u0074\u0068"] ? _0x27cae4[_0x2aa5eb] : ('00' + _0x27cae4[_0x2aa5eb])['substr'](("".split("").reverse().join("") + _0x27cae4[_0x2aa5eb])['length']));
      }
      return _0x3175c3;
    }
    ["gsm".split("").reverse().join("")](_0x23ef3e = _0x1759e6, _0x1a70e9 = "".split("").reverse().join(""), _0x3fd03a = '', _0x90aa42) {
      const _0x2f8bf7 = _0x3efd50 => {
        if (!_0x3efd50) {
          return _0x3efd50;
        }
        if ("gnirts".split("").reverse().join("") == typeof _0x3efd50) {
          return this['isLoon']() ? _0x3efd50 : this['isQuanX']() ? {
            'open-url': _0x3efd50
          } : this['isSurge']() ? {
            'url': _0x3efd50
          } : 0x7feca ^ 0x7feca;
        }
        if ("tcejbo".split("").reverse().join("") == typeof _0x3efd50) {
          if (this['isLoon']()) {
            let _0x1c4df7 = _0x3efd50['openUrl'] || _0x3efd50['url'] || _0x3efd50['open-url'],
              _0x2c197e = _0x3efd50['mediaUrl'] || _0x3efd50['media-url'];
            return {
              'openUrl': _0x1c4df7,
              'mediaUrl': _0x2c197e
            };
          }
          if (this['isQuanX']()) {
            let _0x38c8aa = _0x3efd50['open-url'] || _0x3efd50['url'] || _0x3efd50['openUrl'],
              _0x25d4e5 = _0x3efd50['media-url'] || _0x3efd50['mediaUrl'];
            return {
              'open-url': _0x38c8aa,
              'media-url': _0x25d4e5
            };
          }
          if (this['isSurge']()) {
            let _0x3a3dc9 = _0x3efd50['url'] || _0x3efd50['openUrl'] || _0x3efd50['open-url'];
            return {
              'url': _0x3a3dc9
            };
          }
        }
      };
      this['isMute'] || (this['isSurge']() || this['isLoon']() ? $notification['post'](_0x23ef3e, _0x1a70e9, _0x3fd03a, _0x2f8bf7(_0x90aa42)) : this['isQuanX']() && $notify(_0x23ef3e, _0x1a70e9, _0x3fd03a, _0x2f8bf7(_0x90aa42)));
      if (!this['isMuteLog']) {
        let _0x4f7ca4 = ["".split("").reverse().join(""), '==============📣系统通知📣=============='];
        _0x4f7ca4['push'](_0x23ef3e);
        if (_0x1a70e9) {
          _0x4f7ca4['push'](_0x1a70e9);
        }
        if (_0x3fd03a) {
          _0x4f7ca4['push'](_0x3fd03a);
        }
        console['log'](_0x4f7ca4['join']('\x0a'));
        this['logs'] = this['logs']['concat'](_0x4f7ca4);
      }
    }
    ['log'](..._0x4c69e) {
      if (_0x4c69e['length'] > 0x0) {
        this['logs'] = [...this['logs'], ..._0x4c69e];
      }
      console['log'](_0x4c69e['join'](this['logSeparator']));
    }
    ['logErr'](_0x4aa270, _0x1b0d74) {
      const _0x740f7a = !this['isSurge']() && !this['isQuanX']() && !this['isLoon']();
      _0x740f7a ? this['log']("".split("").reverse().join(""), '❗️' + this['name'] + ',\x20错误!', _0x4aa270['stack']) : this['log']("".split("").reverse().join(""), '❗️' + this['name'] + ',\x20错误!', _0x4aa270);
    }
    ['wait'](_0x51d2d9) {
      return new Promise(_0x1c2948 => setTimeout(_0x1c2948, _0x51d2d9));
    }
    ['done'](_0xd27aa3 = {}) {
      const _0x2b3ff3 = new Date()['getTime'](),
        _0x486788 = (_0x2b3ff3 - this['startTime']) / (0x3955f ^ 0x396b7);
      this['log']('', '🔔' + this['name'] + " \uDD5B\uD83D !\u675F\u7ED3 ,".split("").reverse().join("") + _0x486788 + '\x20秒');
      this['log']();
      if (this['isSurge']() || this['isQuanX']() || this['isLoon']()) {
        $done(_0xd27aa3);
      }
    }
  }(_0x1759e6, _0x1c342e);
}