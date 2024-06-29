console.log("By 老表呆瓜 (https://jdche.cf)为您服务!");
const _0x1366a8 = _0x1c156a("顺丰速运"),
  _0x149a58 = require("got"),
  _0x508ad7 = require("path"),
  {
    exec: _0x39cbfc
  } = require("child_process"),
  _0x204044 = require("crypto-js"),
  {
    CookieJar: _0xd37655
  } = require("tough-cookie"),
  _0x3d0561 = "sfsy",
  _0x371509 = /[\n]/,
  _0x12e0b9 = [_0x3d0561 + "Url"],
  _0x94f81d = process.env[_0x3d0561 + "Bee"] || "false",
  _0x3bec27 = process.env[_0x3d0561 + "DragonBoatDraw"] || "false",
  _0x5b274f = 8000,
  _0x238e48 = 3,
  _0x30f72a = 3.03,
  _0x16c88c = "sfsy",
  _0x1e5430 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x5c6146 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x16c88c + ".json",
  _0x4da51e = 5,
  _0x8785c6 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  _0x5aa02d = "wwesldfs29aniversaryvdld29",
  _0x2bbd78 = "MCS-MIMP-CORE",
  _0x1f992f = "czflqdlhbxcx",
  _0x51a8e3 = "wxwd26mem1",
  _0xd3a68c = {
    "BAOZHU_CARD": "[爆竹卡]",
    "CHUNLIAN_CARD": "[春联卡]",
    "DENGLONG_CARD": "[灯笼卡]",
    "HONGBAO_CARD": "[红包卡]",
    "YUANXIAO_CARD": "[元宵卡]",
    "CHUANGHUA_CARD": "[窗花卡]",
    "COMMON_CARD": "[万能卡]"
  },
  _0x2500ab = {
    "PUSH_TIMES": "推金币次数",
    "COIN": "金币",
    "WELFARE_CARD": "财富卡",
    "RICH_CARD_GAME": "发财卡"
  },
  _0xb8d615 = "YEAR_END_2023",
  _0x4c1524 = "ANNIVERSARY_2024",
  _0x1c616b = "MEMBER_DAY",
  _0x49a488 = "DRAGONBOAT_2024",
  _0x48074c = 8,
  _0x596697 = 1 << _0x48074c - 1,
  _0x144bb1 = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单", "用积分兑任意礼品", "领任意生活特权福利", "设置你的顺丰ID"];
let _0x11aa2a = [],
  _0x479306 = {},
  _0x48776e = 0,
  _0x3ecd02 = 0;
function _0x52bf8a() {
  _0x3ecd02 = 1;
  process.on("SIGTERM", () => {
    _0x3ecd02 = 2;
    process.exit(0);
  });
  const _0x44a714 = _0x508ad7.basename(process.argv[1]),
    _0x103c1c = ["bash", "timeout", "grep"];
  let _0x431bfe = ["ps afx"];
  _0x431bfe.push("grep " + _0x44a714);
  _0x431bfe = _0x431bfe.concat(_0x103c1c.map(_0x5015da => "grep -v \"" + _0x5015da + " \""));
  _0x431bfe.push("wc -l");
  const _0x21adae = _0x431bfe.join("|"),
    _0x318c57 = () => {
      _0x39cbfc(_0x21adae, (_0x2cfb40, _0x14e092, _0x15b085) => {
        if (_0x2cfb40 || _0x15b085) {
          return;
        }
        _0x48776e = parseInt(_0x14e092.trim(), 10);
      });
      _0x3ecd02 == 1 && setTimeout(_0x318c57, 2000);
    };
  _0x318c57();
}
class _0x5d22ab {
  constructor() {
    this.index = _0x1366a8.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x52fc1d = {
        "limit": 0
      },
      _0x587615 = {
        "Connection": "keep-alive"
      },
      _0x4424ea = {
        "retry": _0x52fc1d,
        "timeout": _0x5b274f,
        "followRedirect": false,
        "ignoreInvalidCookies": true,
        "headers": _0x587615
      };
    this.got = _0x149a58.extend(_0x4424ea);
    if (_0x3ecd02 == 0) {
      _0x52bf8a();
    }
  }
  ["log"](_0x287bd4, _0x453e79 = {}) {
    var _0x3f4fd5 = "",
      _0x208726 = _0x1366a8.userCount.toString().length;
    this.index && (_0x3f4fd5 += "账号[" + _0x1366a8.padStr(this.index, _0x208726) + "]");
    this.name && (_0x3f4fd5 += "[" + this.name + "]");
    _0x1366a8.log(_0x3f4fd5 + _0x287bd4, _0x453e79);
  }
  ["set_cookie"](_0x22c3e9, _0x2f1d91, _0x451952, _0x464b26, _0x1b371c = {}) {
    this.cookieJar.setCookieSync(_0x22c3e9 + "=" + _0x2f1d91 + "; Domain=" + _0x451952 + ";", "" + _0x464b26);
  }
  async ["request"](_0x37af19) {
    const _0x44d23a = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x4dcad1 = ["TimeoutError"],
      _0xd39118 = ["EPROTO"],
      _0x58567b = [];
    var _0xd47b63 = null,
      _0xfb8707 = 0,
      _0x3c1821 = _0x37af19.fn || _0x37af19.url;
    let _0x4ac818 = _0x1366a8.get(_0x37af19, "valid_code", _0x58567b);
    _0x37af19.method = _0x37af19?.["method"]?.["toUpperCase"]() || "GET";
    let _0x28db75, _0x2e5132;
    while (_0xfb8707 < _0x238e48) {
      try {
        _0xfb8707++;
        _0x28db75 = "";
        _0x2e5132 = "";
        let _0x77c986 = null,
          _0x3fd4a6 = _0x37af19?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x5b274f,
          _0x43915b = false,
          _0x2e78fd = Math.max(this.index - 2, 0),
          _0xc37c1f = Math.min(Math.max(this.index - 2, 1), 4),
          _0x51e16e = Math.min(Math.max(this.index - 4, 1), 5),
          _0x3c0bed = _0x2e78fd * _0xc37c1f * _0x51e16e * _0x51e16e * 600,
          _0x2c3fa1 = _0x2e78fd * _0xc37c1f * _0x51e16e * _0x51e16e * 4000,
          _0x209f10 = _0x3c0bed + Math.floor(Math.random() * _0x2c3fa1),
          _0x2659c6 = _0x48776e * (_0x48776e - 1) * 3000,
          _0x4fb0c8 = (_0x48776e - 1) * (_0x48776e - 1) * 5000,
          _0x3571f2 = _0x2659c6 + Math.floor(Math.random() * _0x4fb0c8),
          _0x2fdaf1 = Math.max(_0x1366a8.userCount - 2, 0),
          _0x3a9716 = Math.max(_0x1366a8.userCount - 3, 0),
          _0x226cb9 = _0x2fdaf1 * 400,
          _0x51ed3a = _0x3a9716 * 1000,
          _0xd5b172 = _0x226cb9 + Math.floor(Math.random() * _0x51ed3a),
          _0x5d37fc = _0x209f10 + _0x3571f2 + _0xd5b172;
        await _0x1366a8.wait(_0x5d37fc);
        await new Promise(async _0x2500c5 => {
          setTimeout(() => {
            _0x43915b = true;
            _0x2500c5();
          }, _0x3fd4a6);
          await this.got(_0x37af19).then(_0x5221f2 => {
            _0xd47b63 = _0x5221f2;
          }, _0x43ba30 => {
            _0x77c986 = _0x43ba30;
            _0xd47b63 = _0x43ba30.response;
            _0x28db75 = _0x77c986?.["code"] || "";
            _0x2e5132 = _0x77c986?.["name"] || "";
          });
          _0x2500c5();
        });
        if (_0x43915b) this.log("[" + _0x3c1821 + "]请求超时(" + _0x3fd4a6 / 1000 + "秒)，重试第" + _0xfb8707 + "次");else {
          if (_0xd39118.includes(_0x28db75)) {
            this.log("[" + _0x3c1821 + "]请求错误[" + _0x28db75 + "][" + _0x2e5132 + "]");
            _0x77c986?.["message"] && console.log(_0x77c986.message);
            break;
          } else {
            if (_0x4dcad1.includes(_0x2e5132)) this.log("[" + _0x3c1821 + "]请求错误[" + _0x28db75 + "][" + _0x2e5132 + "]，重试第" + _0xfb8707 + "次");else {
              if (_0x44d23a.includes(_0x28db75)) this.log("[" + _0x3c1821 + "]请求错误[" + _0x28db75 + "][" + _0x2e5132 + "]，重试第" + _0xfb8707 + "次");else {
                let _0x9828a6 = _0xd47b63?.["statusCode"] || "",
                  _0x98b60c = _0x9828a6 / 100 | 0;
                if (_0x9828a6) {
                  _0x98b60c > 3 && !_0x4ac818.includes(_0x9828a6) && (_0x9828a6 ? this.log("请求[" + _0x3c1821 + "]返回[" + _0x9828a6 + "]") : this.log("请求[" + _0x3c1821 + "]错误[" + _0x28db75 + "][" + _0x2e5132 + "]"));
                  if (_0x98b60c <= 4) {
                    break;
                  }
                } else this.log("请求[" + _0x3c1821 + "]错误[" + _0x28db75 + "][" + _0x2e5132 + "]");
              }
            }
          }
        }
      } catch (_0x547cb) {
        _0x547cb.name == "TimeoutError" ? this.log("[" + _0x3c1821 + "]请求超时，重试第" + _0xfb8707 + "次") : this.log("[" + _0x3c1821 + "]请求错误(" + _0x547cb.message + ")，重试第" + _0xfb8707 + "次");
      }
    }
    const _0x4f3ecd = {
      "statusCode": _0x28db75 || -1,
      "headers": null,
      "result": null
    };
    if (_0xd47b63 == null) return Promise.resolve(_0x4f3ecd);
    let {
      statusCode: _0x45adea,
      headers: _0x3b18b2,
      body: _0x40bd38
    } = _0xd47b63;
    if (_0x40bd38) {
      try {
        _0x40bd38 = JSON.parse(_0x40bd38);
      } catch {}
    }
    const _0x3cea2e = {
      "statusCode": _0x45adea,
      "headers": _0x3b18b2,
      "result": _0x40bd38
    };
    return Promise.resolve(_0x3cea2e);
  }
}
let _0x49bd9d = _0x5d22ab;
try {
  let _0x5e0ebf = require("./LocalBasic");
  _0x49bd9d = _0x5e0ebf;
} catch {}
let _0xd9af8d = new _0x49bd9d(_0x1366a8);
class _0x520715 extends _0x49bd9d {
  constructor(_0x4f6c9) {
    super(_0x1366a8);
    this.refreshUrl = _0x4f6c9;
    this.cookieJar = new _0xd37655();
    this.deviceId = _0x1366a8.randomPattern("xxxxxxxx-xxxx-xxxx");
    this.jika_black = false;
    this.anniversary_black = false;
    this.dragonBoat_black = false;
    this.memberDay_black = false;
    this.memberDay_redPacket_drewToday = false;
    this.memberDay_redPacket_map = {};
    const _0x46f367 = {
      "User-Agent": _0x8785c6
    };
    this.got = this.got.extend({
      "cookieJar": this.cookieJar,
      "headers": _0x46f367
    });
  }
  ["getSign"](_0x12901e = {}) {
    let _0x70e6df = Date.now(),
      _0x25aa9d = "token=" + _0x5aa02d + "&timestamp=" + _0x70e6df + "&sysCode=" + _0x2bbd78,
      _0x4f054f = _0x204044.MD5(_0x25aa9d).toString();
    const _0x32d201 = {
      "platform": "MINI_PROGRAM",
      "channel": _0x51a8e3,
      "sysCode": _0x2bbd78,
      "timestamp": _0x70e6df,
      "signature": _0x4f054f
    };
    return _0x32d201;
  }
  async ["refresh_cookie"](_0x4f0e05 = {}) {
    let _0x143422 = false;
    try {
      const _0x43263d = {
        "fn": "refresh_cookie",
        "method": "get",
        "url": this.refreshUrl
      };
      let {
        statusCode: _0x82762,
        headers: _0x39a61d
      } = await this.request(_0x43263d);
      if (_0x82762 == 302) {
        for (let _0x3bb53c of _0x39a61d["set-cookie"]) {
          if (_0x3bb53c.includes("_login_mobile_")) {
            let _0x350046 = _0x3bb53c.match(/_login_mobile_=(\d+);/);
            _0x350046 && (this.name = _0x350046[1]);
            break;
          }
        }
        _0x143422 = true;
        this.log("登录成功");
      } else this.log("登录失败[" + _0x82762 + "]");
    } catch (_0x2a2d31) {
      console.log(_0x2a2d31);
    } finally {
      return _0x143422;
    }
  }
  async ["personalInfo"](_0x1c9f7e = {}) {
    try {
      let _0x1a3093 = {
          "fn": "personalInfo",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/personalInfo",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x3eb5c6
        } = await this.request(_0x1a3093);
      if (_0x3eb5c6?.["success"]) {
        const _0x5d0e11 = {
          "notify": true
        };
        this.log("积分: " + _0x3eb5c6.obj.availablePoints, _0x5d0e11);
      } else this.log("查询账号信息失败: " + (_0x3eb5c6?.["errorMessage"] || (_0x3eb5c6 ? JSON.stringify(_0x3eb5c6) : "无返回")));
    } catch (_0x188da3) {
      console.log(_0x188da3);
    }
  }
  async ["queryUserInfo"](_0x52911e = {}) {
    try {
      let _0x253649 = {
          "fn": "queryUserInfo",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~queryUserInfo",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "sysCode": "ESG-CEMP-CORE",
            "optionalColumns": ["usablePoint", "cycleSub", "leavePoint"],
            "token": "zeTLTYeG0bLetfRk"
          }
        },
        {
          result: _0x4e3f02
        } = await this.request(_0x253649);
      if (_0x4e3f02?.["success"]) {
        let {
            usablePoint: _0x942c8b,
            cycleAdd: _0x23103f,
            cycleSub: _0x5a1665,
            leavePoint: _0x3c90c0,
            pointClearCycle: _0x180563
          } = _0x4e3f02.obj,
          _0x37a87d = "积分: " + _0x942c8b,
          _0x3d6d4c = _0x3c90c0 - _0x5a1665,
          _0x51b842 = new Date(_0x180563 + " 00:00:00");
        _0x51b842.setFullYear(_0x51b842.getFullYear() + 1);
        let _0x48ccef = _0x51b842.getTime();
        if (_0x3d6d4c > 0 && _0x48ccef > Date.now()) {
          let _0x4e403e = _0x1366a8.time("yyyy-MM-dd", _0x48ccef);
          _0x37a87d += ", 有" + _0x3d6d4c + "积分将在" + _0x4e403e + "过期";
        }
        const _0x50ed3f = {
          "notify": true
        };
        this.log(_0x37a87d, _0x50ed3f);
      } else this.log("查询账号信息失败: " + (_0x4e3f02?.["errorMessage"] || (_0x4e3f02 ? JSON.stringify(_0x4e3f02) : "无返回")));
    } catch (_0x14a0dc) {
      console.log(_0x14a0dc);
    }
  }
  async ["automaticSignFetchPackage"](_0x12e062 = {}) {
    try {
      let _0xe59f4 = {
          "fn": "automaticSignFetchPackage",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "comeFrom": _0x1366a8.get(_0x12e062, "comeFrom", "vioin"),
            "channelFrom": _0x1366a8.get(_0x12e062, "channelFrom", "SFAPP")
          }
        },
        {
          result: _0x19ee06
        } = await this.request(_0xe59f4);
      if (_0x19ee06?.["success"]) {
        _0x19ee06?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x19ee06?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得: " + _0x19ee06?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x4c1c1b => _0x4c1c1b.packetName)?.["join"](", "));
        await this.queryPointTaskAndSignFromES();
        const _0x2a9ad3 = {
          "channelType": 3
        };
        await this.queryPointTaskAndSignFromES(_0x2a9ad3);
        await this.queryUserInfo();
      } else this.log("查询签到失败: " + (_0x19ee06?.["errorMessage"] || (_0x19ee06 ? JSON.stringify(_0x19ee06) : "无返回")));
    } catch (_0x1d3d3b) {
      console.log(_0x1d3d3b);
    }
  }
  async ["queryPointTaskAndSignFromES"](_0x8ff878 = {}) {
    try {
      let _0x1ada0c = {
          "fn": "queryPointTaskAndSignFromES",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "deviceId": this.deviceId,
            "channelType": String(_0x1366a8.get(_0x8ff878, "channelType", 1))
          }
        },
        {
          result: _0x3544c7
        } = await this.request(_0x1ada0c);
      if (_0x3544c7?.["success"]) for (let _0x4d253d of _0x3544c7.obj.taskTitleLevels) {
        switch (_0x4d253d.status) {
          case 2:
            if (_0x144bb1.includes(_0x4d253d.title)) break;
            await this.finishTask(_0x4d253d);
          case 1:
            await this.fetchIntegral(_0x4d253d);
            break;
          case 3:
            break;
          default:
            this.log("任务[" + _0x4d253d.title + "] -- 未知状态[" + _0x4d253d.status + "]");
            break;
        }
      } else this.log("查询任务失败: " + (_0x3544c7?.["errorMessage"] || (_0x3544c7 ? JSON.stringify(_0x3544c7) : "无返回")));
    } catch (_0x4fb3e3) {
      console.log(_0x4fb3e3);
    }
  }
  async ["finishTask"](_0x14fde6, _0x1c50a2 = {}) {
    try {
      const _0x4e6ee7 = {
        "taskCode": _0x14fde6.taskCode
      };
      let _0xdf6d01 = {
          "fn": "finishTask",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          "headers": {
            ...this.getSign()
          },
          "json": _0x4e6ee7
        },
        {
          result: _0x5d6479
        } = await this.request(_0xdf6d01);
      _0x5d6479?.["success"] ? this.log("完成任务[" + _0x14fde6.title + "]成功") : this.log("完成任务[" + _0x14fde6.title + "]失败: " + (_0x5d6479?.["errorMessage"] || (_0x5d6479 ? JSON.stringify(_0x5d6479) : "无返回")));
    } catch (_0x59265b) {
      console.log(_0x59265b);
    }
  }
  async ["fetchIntegral"](_0x3dda5e, _0x1375aa = {}) {
    try {
      let _0x1e1808 = {
          "fn": "fetchIntegral",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "strategyId": _0x3dda5e.strategyId,
            "taskId": _0x3dda5e.taskId,
            "taskCode": _0x3dda5e.taskCode,
            "deviceId": this.deviceId
          }
        },
        {
          result: _0x18eaf7
        } = await this.request(_0x1e1808);
      _0x18eaf7?.["success"] ? this.log("领取任务[" + _0x3dda5e.title + "]奖励: " + _0x18eaf7.obj.point + "积分") : this.log("领取任务[" + _0x3dda5e.title + "]奖励失败: " + (_0x18eaf7?.["errorMessage"] || (_0x18eaf7 ? JSON.stringify(_0x18eaf7) : "无返回")));
    } catch (_0x18feb6) {
      console.log(_0x18feb6);
    }
  }
  async ["queryPointTaskAndSign"](_0x5d8a26 = {}) {
    try {
      let _0x37d6f8 = {
          "fn": "queryPointTaskAndSign",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/queryPointTaskAndSign",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "channel": _0x1366a8.get(_0x5d8a26, "channel", "SFAPP"),
            "pageType": _0x1366a8.get(_0x5d8a26, "pageType", "APP_MINE_TASK")
          }
        },
        {
          result: _0x1ca10
        } = await this.request(_0x37d6f8);
      if (_0x1ca10?.["success"]) for (let _0x100970 of _0x1ca10?.["obj"]?.["taskTitleLevels"] || []) {
        if (_0x144bb1.includes(_0x100970.title)) continue;
        await this.scanPageToRecord(_0x100970);
        await this.fetchPoint(_0x100970);
      } else this.log("查询旧版任务失败: " + (_0x1ca10?.["errorMessage"] || (_0x1ca10 ? JSON.stringify(_0x1ca10) : "无返回")));
    } catch (_0x69923f) {
      console.log(_0x69923f);
    }
  }
  async ["scanPageToRecord"](_0x312904, _0x4f9782 = {}) {
    try {
      let _0x5cb3a3 = {
          "fn": "scanPageToRecord",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/scanPageToRecord",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "channel": _0x1366a8.get(_0x4f9782, "channel", "SFAPP"),
            "pageType": _0x312904.pageType
          }
        },
        {
          result: _0x233c04
        } = await this.request(_0x5cb3a3);
      _0x233c04?.["success"] ? this.log("完成任务[" + _0x312904.title + "]成功") : this.log("完成任务[" + _0x312904.title + "]失败: " + (_0x233c04?.["errorMessage"] || (_0x233c04 ? JSON.stringify(_0x233c04) : "无返回")));
    } catch (_0xc20e69) {
      console.log(_0xc20e69);
    }
  }
  async ["fetchPoint"](_0x35c08e, _0x21cf80 = {}) {
    try {
      let _0xddb5d4 = {
          "fn": "fetchPoint",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/fetchPoint",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "channel": _0x1366a8.get(_0x21cf80, "channel", "SFAPP"),
            "pageType": _0x35c08e.pageType,
            "deviceId": this.deviceId
          }
        },
        {
          result: _0x37d010
        } = await this.request(_0xddb5d4);
      _0x37d010?.["success"] ? this.log("领取任务[" + _0x35c08e.title + "]奖励成功") : this.log("领取任务[" + _0x35c08e.title + "]奖励失败: " + (_0x37d010?.["errorMessage"] || (_0x37d010 ? JSON.stringify(_0x37d010) : "无返回")));
    } catch (_0xbd09c0) {
      console.log(_0xbd09c0);
    }
  }
  async ["coupon_list"](_0x335195 = 1, _0x4e0ee0 = 100, _0x5b7962 = {}) {
    try {
      const _0x3039a1 = {
        "couponType": "",
        "pageNo": _0x335195,
        "pageSize": _0x4e0ee0
      };
      let _0x3526f0 = {
          "fn": "coupon_list",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/coupon/available/list",
          "headers": {
            ...this.getSign()
          },
          "json": _0x3039a1
        },
        {
          result: _0x2ba99a
        } = await this.request(_0x3526f0);
      if (_0x2ba99a?.["success"]) {
        let _0x2b982e = [],
          _0x225476 = _0x2ba99a?.["obj"] || [];
        for (let _0x36f030 of _0x225476) {
          let {
            couponType: _0x5ed021,
            invalidTm: _0x6d720,
            pledgeAmt: _0x5b83f9,
            couponName: _0x376b1d
          } = _0x36f030;
          _0x5ed021 === "1" && _0x5b83f9 >= 8 && _0x2b982e.push(_0x376b1d + ", 过期时间: " + _0x6d720);
        }
        if (_0x2b982e.length) {
          const _0xd5a39 = {
            "notify": true
          };
          this.log("大额优惠券:", _0xd5a39);
          const _0x5d7681 = {
            "notify": true
          };
          _0x1366a8.log(_0x2b982e.join("\n"), _0x5d7681);
        }
      } else this.log("查询账号券失败: " + (_0x2ba99a?.["errorMessage"] || (_0x2ba99a ? JSON.stringify(_0x2ba99a) : "无返回")));
    } catch (_0x24f7ad) {
      console.log(_0x24f7ad);
    }
  }
  async ["personalInfoNew"](_0x16ee62 = {}) {
    try {
      let _0x2b4675 = {
          "fn": "personalInfoNew",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~personalInfoNew",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x42672c
        } = await this.request(_0x2b4675);
      if (_0x42672c?.["success"]) {
        this.userId = _0x42672c.obj.userId;
        const _0x32bb4e = {
          "notify": true
        };
        this.log("积分: " + _0x42672c.obj.availablePoints, _0x32bb4e);
      } else this.log("查询账号积分失败: " + (_0x42672c?.["errorMessage"] || (_0x42672c ? JSON.stringify(_0x42672c) : "无返回")));
    } catch (_0x206427) {
      console.log(_0x206427);
    }
  }
  async ["bee_indexData"](_0x2a1573 = {}) {
    try {
      let _0x368081 = _0x1366a8.randomList(_0x11aa2a.filter(_0x1e3261 => _0x1e3261 != this.userId));
      const _0x144a6f = {
        "inviteUserId": _0x368081
      };
      let _0xa0a105 = {
        "fn": "bee_indexData",
        "method": "post",
        "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        "headers": {
          ...this.getSign()
        },
        "json": _0x144a6f
      };
      {
        let {
          result: _0x16995a
        } = await this.request(_0x1366a8.copy(_0xa0a105));
        if (_0x16995a?.["success"]) {
          let {
            friendAwards = [],
            gameNum = 0,
            usableHoney: _0x4f9c92,
            capacity: _0x40bbef
          } = _0x16995a?.["obj"];
          friendAwards?.["length"] && this.log("获得奖励: " + _0x16995a.obj.friendAwards.map(_0x2d8ea7 => _0x2d8ea7.name).join(","));
          _0x4f9c92 >= _0x40bbef;
          this.log("可以采蜜冒险" + gameNum + "次");
          while (gameNum-- > 0) {
            await this.bee_gameReport();
          }
          await this.bee_taskDetail();
        } else {
          const _0x3519a1 = {
            "notify": true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x16995a?.["errorMessage"] || (_0x16995a ? JSON.stringify(_0x16995a) : "无返回")), _0x3519a1);
          return;
        }
      }
      {
        let {
          result: _0x14fee9
        } = await this.request(_0x1366a8.copy(_0xa0a105));
        if (_0x14fee9?.["success"]) {
          for (let _0x115be6 of _0x14fee9?.["obj"]?.["taskDetail"] || []) {
            await this.bee_receiveHoney(_0x115be6);
          }
        } else {
          const _0x23ee0f = {
            "notify": true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x14fee9?.["errorMessage"] || (_0x14fee9 ? JSON.stringify(_0x14fee9) : "无返回")), _0x23ee0f);
          return;
        }
      }
      {
        let {
          result: _0x380eeb
        } = await this.request(_0x1366a8.copy(_0xa0a105));
        if (_0x380eeb?.["success"]) {
          const _0x25e689 = {
            "notify": true
          };
          this.log("采蜜游戏丰蜜: " + (_0x380eeb?.["obj"]?.["usableHoney"] || 0), _0x25e689);
        } else {
          const _0x5b00d7 = {
            "notify": true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x380eeb?.["errorMessage"] || (_0x380eeb ? JSON.stringify(_0x380eeb) : "无返回")), _0x5b00d7);
          return;
        }
      }
    } catch (_0x4c2122) {
      console.log(_0x4c2122);
    }
  }
  async ["bee_expand"](_0xa02902 = {}) {
    let _0x179f64 = false;
    try {
      let _0x54da57 = {
          "fn": "bee_expand",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeApiService~expand",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x5775eb
        } = await this.request(_0x54da57);
      console.log(JSON.stringify(_0x5775eb));
      _0x5775eb?.["success"] ? (_0x179f64 = true, this.log("采蜜游戏扩容成功")) : this.log("采蜜游戏扩容失败: " + (_0x5775eb?.["errorMessage"] || (_0x5775eb ? JSON.stringify(_0x5775eb) : "无返回")));
    } catch (_0x5729c3) {
      console.log(_0x5729c3);
    } finally {
      return _0x179f64;
    }
  }
  async ["bee_receiveHoney"](_0x4fa40d, _0x5c6717 = {}) {
    try {
      const _0x33a420 = {
        "taskType": _0x4fa40d.type
      };
      let _0x22b474 = {
          "fn": "bee_receiveHoney",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
          "headers": {
            ...this.getSign()
          },
          "json": _0x33a420
        },
        {
          result: _0x521946
        } = await this.request(_0x22b474);
      _0x521946?.["success"] ? this.log("领取[" + _0x4fa40d.type + "]奖励获得: " + _0x4fa40d.value + "丰蜜") : this.log("领取[" + _0x4fa40d.type + "]奖励失败: " + (_0x521946?.["errorMessage"] || (_0x521946 ? JSON.stringify(_0x521946) : "无返回")));
    } catch (_0x569f8d) {
      console.log(_0x569f8d);
    }
  }
  async ["bee_gameReport"](_0x426097 = {}) {
    try {
      let _0x1e5e80 = 20;
      const _0x378e2c = {
        "gatherHoney": _0x1e5e80
      };
      let _0x72826a = {
          "fn": "bee_gameReport",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
          "headers": {
            ...this.getSign()
          },
          "json": _0x378e2c
        },
        {
          result: _0x4401ac
        } = await this.request(_0x72826a);
      if (_0x4401ac?.["success"]) this.log("采蜜冒险获得" + _0x1e5e80 + "丰蜜");else {
        let _0x2d1843 = _0x4401ac?.["errorMessage"] || (_0x4401ac ? JSON.stringify(_0x4401ac) : "无返回");
        this.log("采蜜冒险失败: " + _0x2d1843);
      }
    } catch (_0x1f2099) {
      console.log(_0x1f2099);
    }
  }
  async ["bee_taskDetail"](_0x380988 = {}) {
    try {
      let _0x3eaeaa = {
          "fn": "bee_taskDetail",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x152a7c
        } = await this.request(_0x3eaeaa);
      if (_0x152a7c?.["success"]) for (let _0x174c66 of _0x152a7c.obj.list) {
        if (!_0x174c66.taskCode) continue;
        switch (_0x174c66.status) {
          case 2:
            if (_0x144bb1.includes(_0x174c66.taskType)) break;
            await this.bee_finishTask(_0x174c66);
          case 1:
          case 3:
            break;
          default:
            this.log("任务[" + _0x174c66.title + "] -- 未知状态[" + _0x174c66.status + "]");
            break;
        }
      } else this.log("查询任务失败: " + (_0x152a7c?.["errorMessage"] || (_0x152a7c ? JSON.stringify(_0x152a7c) : "无返回")));
    } catch (_0x207492) {
      console.log(_0x207492);
    }
  }
  async ["bee_finishTask"](_0xa0e621, _0x5d776e = {}) {
    try {
      const _0x3067e8 = {
        "taskCode": _0xa0e621.taskCode
      };
      let _0xa4179a = {
          "fn": "bee_finishTask",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          "headers": {
            ...this.getSign()
          },
          "json": _0x3067e8
        },
        {
          result: _0x4df353
        } = await this.request(_0xa4179a);
      _0x4df353?.["success"] ? this.log("完成采蜜任务[" + _0xa0e621.taskType + "]成功") : this.log("完成采蜜任务[" + _0xa0e621.taskType + "]失败: " + (_0x4df353?.["errorMessage"] || (_0x4df353 ? JSON.stringify(_0x4df353) : "无返回")));
    } catch (_0x271770) {
      console.log(_0x271770);
    }
  }
  async ["superWelfare_receiveRedPacket"](_0xefd8d9 = {}) {
    try {
      const _0x470c18 = {
        "channel": _0x1f992f
      };
      let _0x345028 = {
          "fn": "superWelfare_receiveRedPacket",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
          "headers": {
            ...this.getSign()
          },
          "json": _0x470c18
        },
        {
          result: _0x22cc96
        } = await this.request(_0x345028);
      if (_0x22cc96?.["success"]) {
        let _0x4615e7 = _0x22cc96?.["obj"]?.["giftList"];
        _0x22cc96?.["obj"]?.["extraGiftList"]?.["length"] && (_0x4615e7 = _0x4615e7.concat(_0x22cc96.obj.extraGiftList));
        let _0x4dab53 = _0x4615e7?.["map"](_0x50daa9 => _0x50daa9.giftName)?.["join"](", ") || "",
          _0x96496 = _0x22cc96?.["obj"]?.["receiveStatus"] == 1 ? "领取成功" : "已领取过";
        const _0x6fc93f = {
          "notify": true
        };
        this.log("超值福利签到[" + _0x96496 + "]: " + _0x4dab53, _0x6fc93f);
      } else this.log("超值福利签到失败: " + (_0x22cc96?.["errorMessage"] || (_0x22cc96 ? JSON.stringify(_0x22cc96) : "无返回")));
    } catch (_0x5502f8) {
      console.log(_0x5502f8);
    }
  }
  async ["memberDay_invite"](_0x685238 = {}) {
    try {
      let _0x2e3203 = _0x1366a8.randomList(_0x11aa2a.filter(_0x40cbf7 => _0x40cbf7 != this.userId));
      const _0x235aad = {
        "inviteUserId": _0x2e3203
      };
      let _0x2220d2 = {
        "fn": "memberDay_invite",
        "method": "post",
        "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
        "headers": {
          ...this.getSign()
        },
        "json": _0x235aad
      };
      await this.request(_0x2220d2);
      let {
        result: _0x3f8861
      } = await this.request(_0x2220d2);
      if (_0x3f8861?.["success"]) {
        let {
          canReceiveInviteAward: _0x51c554,
          risk: _0x2c8d7c
        } = _0x3f8861?.["obj"];
        _0x51c554 && (await this.memberDay_receiveInviteAward(_0x2e3203));
        if (this.memberDay_black) return;
        await this.memberDay_index();
      } else {
        let _0x1a4cda = _0x3f8861?.["errorMessage"] || (_0x3f8861 ? JSON.stringify(_0x3f8861) : "无返回");
        this.log("查询会员日失败: " + _0x1a4cda);
        if (_0x1a4cda?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1a155c = {
            "notify": true
          };
          this.log("会员日任务风控", _0x1a155c);
        }
      }
    } catch (_0x530e5c) {
      console.log(_0x530e5c);
    }
  }
  async ["memberDay_index"](_0x1e8fcb = {}) {
    try {
      let _0x157cfa = {
          "fn": "memberDay_index",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x364975
        } = await this.request(_0x157cfa);
      if (_0x364975?.["success"]) {
        let {
          lotteryNum: _0x529382,
          risk: _0x32af32
        } = _0x364975?.["obj"];
        await this.memberDay_redPacketReceivedStatus();
        _0x529382 = _0x529382 || 0;
        this.log("会员日可以抽奖" + _0x529382 + "次");
        while (_0x529382-- > 0) {
          await this.memberDay_lottery();
        }
        if (this.memberDay_black) return;
        await this.memberDay_taskList();
        if (this.memberDay_black) return;
        await this.memberDay_redPacketStatus();
      } else {
        let _0x23ebce = _0x364975?.["errorMessage"] || (_0x364975 ? JSON.stringify(_0x364975) : "无返回");
        this.log("查询会员日失败: " + _0x23ebce);
        if (_0x23ebce?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x10e29e = {
            "notify": true
          };
          this.log("会员日任务风控", _0x10e29e);
        }
      }
    } catch (_0x5d95eb) {
      console.log(_0x5d95eb);
    }
  }
  async ["memberDay_receiveInviteAward"](_0x331f2d, _0x6db814 = {}) {
    try {
      const _0x7c057c = {
        "inviteUserId": _0x331f2d
      };
      let _0x53c1f6 = {
          "fn": "memberDay_receiveInviteAward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~receiveInviteAward",
          "headers": {
            ...this.getSign()
          },
          "json": _0x7c057c
        },
        {
          result: _0x3d0db5
        } = await this.request(_0x53c1f6);
      if (_0x3d0db5?.["success"]) {
        let {
          productName = "空气"
        } = _0x3d0db5?.["obj"] || {};
        const _0x43fc40 = {
          "notify": true
        };
        this.log("会员日奖励: " + productName, _0x43fc40);
      } else {
        let _0x3ef1fd = _0x3d0db5?.["errorMessage"] || (_0x3d0db5 ? JSON.stringify(_0x3d0db5) : "无返回");
        this.log("领取会员日奖励失败: " + _0x3ef1fd);
        if (_0x3ef1fd?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x5e4b83 = {
            "notify": true
          };
          this.log("会员日任务风控", _0x5e4b83);
        }
      }
    } catch (_0x823d3f) {
      console.log(_0x823d3f);
    }
  }
  async ["memberDay_lottery"](_0x2df9a9 = {}) {
    try {
      let _0x373b42 = {
          "fn": "memberDay_lottery",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayLotteryService~lottery",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x457b89
        } = await this.request(_0x373b42);
      if (_0x457b89?.["success"]) {
        let {
          productName = "空气"
        } = _0x457b89?.["obj"] || {};
        const _0x4c3002 = {
          "notify": true
        };
        this.log("会员日抽奖: " + productName, _0x4c3002);
      } else {
        let _0x572368 = _0x457b89?.["errorMessage"] || (_0x457b89 ? JSON.stringify(_0x457b89) : "无返回");
        this.log("会员日抽奖失败: " + _0x572368);
        if (_0x572368?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x5b0c98 = {
            "notify": true
          };
          this.log("会员日任务风控", _0x5b0c98);
        }
      }
    } catch (_0x2d87ad) {
      console.log(_0x2d87ad);
    }
  }
  async ["memberDay_taskList"](_0x4c2281 = {}) {
    try {
      const _0x5bee2b = {
        "activityCode": _0x1c616b,
        "channelType": "MINI_PROGRAM"
      };
      let _0x437e53 = {
          "fn": "memberDay_taskList",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          "headers": {
            ...this.getSign()
          },
          "json": _0x5bee2b
        },
        {
          result: _0x376620
        } = await this.request(_0x437e53);
      if (_0x376620?.["success"]) {
        let _0x198218 = _0x376620?.["obj"] || [];
        for (let _0x1366da of _0x198218.filter(_0x507d4e => _0x507d4e.status == 1)) {
          if (this.memberDay_black) return;
          await this.memberDay_fetchMixTaskReward(_0x1366da);
        }
        for (let _0x553337 of _0x198218.filter(_0x14e3d6 => _0x14e3d6.status == 2)) {
          if (this.memberDay_black) return;
          switch (_0x553337.taskType) {
            case "SEND_SUCCESS":
            case "INVITEFRIENDS_PARTAKE_ACTIVITY":
            case "OPEN_SVIP":
            case "OPEN_NEW_EXPRESS_CARD":
            case "OPEN_FAMILY_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x43b4f5 = 0; _0x43b4f5 < _0x553337.restFinishTime && !this.memberDay_black; _0x43b4f5++) {
                  await this.memberDay_finishTask(_0x553337);
                }
                break;
              }
          }
        }
      } else {
        let _0x5c99c7 = _0x376620?.["errorMessage"] || (_0x376620 ? JSON.stringify(_0x376620) : "无返回");
        this.log("查询会员日任务失败: " + _0x5c99c7);
        if (_0x5c99c7?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1d792b = {
            "notify": true
          };
          this.log("会员日任务风控", _0x1d792b);
        }
      }
    } catch (_0x4bff99) {
      console.log(_0x4bff99);
    }
  }
  async ["memberDay_finishTask"](_0x5effb9, _0x206881 = {}) {
    try {
      const _0xc256e4 = {
        "taskCode": _0x5effb9.taskCode
      };
      let _0x339562 = {
          "fn": "memberDay_finishTask",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          "headers": {
            ...this.getSign()
          },
          "json": _0xc256e4
        },
        {
          result: _0x3a96d8
        } = await this.request(_0x339562);
      if (_0x3a96d8?.["success"]) this.log("完成会员日任务[" + _0x5effb9.taskName + "]成功"), await this.memberDay_fetchMixTaskReward(_0x5effb9);else {
        let _0x492629 = _0x3a96d8?.["errorMessage"] || (_0x3a96d8 ? JSON.stringify(_0x3a96d8) : "无返回");
        this.log("完成会员日任务[" + _0x5effb9.taskName + "]失败: " + _0x492629);
        if (_0x492629?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1ecdb4 = {
            "notify": true
          };
          this.log("会员日任务风控", _0x1ecdb4);
        }
      }
    } catch (_0x2771dd) {
      console.log(_0x2771dd);
    }
  }
  async ["memberDay_fetchMixTaskReward"](_0x3bb960, _0x37313b = {}) {
    try {
      const _0x51f599 = {
        "taskType": _0x3bb960.taskType,
        "activityCode": _0x1c616b,
        "channelType": "MINI_PROGRAM"
      };
      let _0x5532a5 = {
          "fn": "memberDay_fetchMixTaskReward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~fetchMixTaskReward",
          "headers": {
            ...this.getSign()
          },
          "json": _0x51f599
        },
        {
          result: _0x17178a
        } = await this.request(_0x5532a5);
      if (_0x17178a?.["success"]) this.log("领取会员日任务[" + _0x3bb960.taskName + "]奖励成功");else {
        let _0x332780 = _0x17178a?.["errorMessage"] || (_0x17178a ? JSON.stringify(_0x17178a) : "无返回");
        this.log("领取会员日任务[" + _0x3bb960.taskName + "]奖励失败: " + _0x332780);
        if (_0x332780?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x4c4f9b = {
            "notify": true
          };
          this.log("会员日任务风控", _0x4c4f9b);
        }
      }
    } catch (_0x1bbd23) {
      console.log(_0x1bbd23);
    }
  }
  async ["memberDay_redPacketReceivedStatus"](_0x194cdd = {}) {
    try {
      let _0x26bdf1 = {
          "fn": "memberDay_redPacketReceivedStatus",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~redPacketReceivedStatus",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x145029
        } = await this.request(_0x26bdf1);
      if (_0x145029?.["success"]) for (let _0x1dd7ac of _0x145029?.["obj"] || []) {
        if (_0x1dd7ac.received) continue;
        let _0x3159dc = new Date().getHours();
        _0x1dd7ac.receiveHour == _0x3159dc && (await this.memberDay_receiveRedPacket(_0x1dd7ac.receiveHour));
      } else {
        let _0x1a54d0 = _0x145029?.["errorMessage"] || (_0x145029 ? JSON.stringify(_0x145029) : "无返回");
        this.log("会员日查询整点领红包失败: " + _0x1a54d0);
        if (_0x1a54d0?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x397836 = {
            "notify": true
          };
          this.log("会员日任务风控", _0x397836);
        }
      }
    } catch (_0x277ed6) {
      console.log(_0x277ed6);
    }
  }
  async ["memberDay_receiveRedPacket"](_0x56be75, _0x2dc2dc = {}) {
    try {
      const _0x4300c1 = {
        "receiveHour": _0x56be75
      };
      let _0x349ed9 = {
          "fn": "memberDay_receiveRedPacket",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~receiveRedPacket",
          "headers": {
            ...this.getSign()
          },
          "json": _0x4300c1
        },
        {
          result: _0x2833f7
        } = await this.request(_0x349ed9);
      if (_0x2833f7?.["success"]) this.log("会员日领取" + _0x56be75 + "点红包成功");else {
        let _0x4ddc7c = _0x2833f7?.["errorMessage"] || (_0x2833f7 ? JSON.stringify(_0x2833f7) : "无返回");
        this.log("会员日领取" + _0x56be75 + "点红包失败: " + _0x4ddc7c);
        if (_0x4ddc7c?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x31b936 = {
            "notify": true
          };
          this.log("会员日任务风控", _0x31b936);
        }
      }
    } catch (_0x49b7f1) {
      console.log(_0x49b7f1);
    }
  }
  async ["memberDay_redPacketStatus"](_0x3f8acc = {}) {
    try {
      let _0x1956c0 = {
          "fn": "memberDay_redPacketStatus",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketStatus",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x1cd2e5
        } = await this.request(_0x1956c0);
      if (_0x1cd2e5?.["success"]) {
        let {
          drewToday: _0x565b38,
          packetList: _0x4d2cb8
        } = _0x1cd2e5?.["obj"];
        this.memberDay_redPacket_drewToday = _0x565b38;
        for (let _0x1edbee of _0x4d2cb8) {
          this.memberDay_redPacket_map[_0x1edbee.level] = _0x1edbee.count;
        }
        let _0x280379 = _0x48074c;
        for (let _0x399386 = 1; _0x399386 < _0x280379; _0x399386++) {
          let _0x1e3bdc = this.memberDay_redPacket_map[_0x399386];
          while (_0x1e3bdc >= 2) {
            await this.memberDay_redPacketMerge(_0x399386);
            _0x1e3bdc -= 2;
          }
        }
        let _0x5722c9 = [],
          _0x993159 = 0;
        for (let _0x2281b8 in this.memberDay_redPacket_map) {
          if (!this.memberDay_redPacket_map[_0x2281b8]) continue;
          _0x5722c9.push("[" + _0x2281b8 + "级]X" + this.memberDay_redPacket_map[_0x2281b8]);
          let _0x20654a = parseInt(_0x2281b8);
          _0x20654a < _0x280379 && (_0x993159 += 1 << _0x20654a - 1);
        }
        const _0x37970e = {
          "notify": true
        };
        this.log("会员日合成列表: " + _0x5722c9.join(", "), _0x37970e);
        if (this.memberDay_redPacket_map[_0x280379]) {
          const _0x47859c = {
            "notify": true
          };
          this.log("会员日已拥有[" + _0x280379 + "级]红包X" + this.memberDay_redPacket_map[_0x280379], _0x47859c);
          await this.memberDay_redPacketDraw(_0x280379);
        } else {
          let _0x15da50 = _0x596697 - _0x993159;
          const _0x316439 = {
            "notify": true
          };
          this.log("会员日距离[" + _0x280379 + "级]红包还差: [1级]红包X" + _0x15da50, _0x316439);
        }
      } else {
        let _0x5f88e3 = _0x1cd2e5?.["errorMessage"] || (_0x1cd2e5 ? JSON.stringify(_0x1cd2e5) : "无返回");
        this.log("查询会员日合成失败: " + _0x5f88e3);
        if (_0x5f88e3?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x53d00c = {
            "notify": true
          };
          this.log("会员日任务风控", _0x53d00c);
        }
      }
    } catch (_0xc48dea) {
      console.log(_0xc48dea);
    }
  }
  async ["memberDay_redPacketMerge"](_0x48114a, _0x45f451 = {}) {
    try {
      const _0x5a22d2 = {
        "level": _0x48114a,
        "num": 2
      };
      let _0x1f9085 = {
          "fn": "memberDay_redPacketMerge",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketMerge",
          "headers": {
            ...this.getSign()
          },
          "json": _0x5a22d2
        },
        {
          result: _0x5d0f41
        } = await this.request(_0x1f9085);
      if (_0x5d0f41?.["success"]) this.log("会员日合成: [" + _0x48114a + "级]红包X2 -> [" + (_0x48114a + 1) + "级]红包"), this.memberDay_redPacket_map[_0x48114a] -= 2, !this.memberDay_redPacket_map[_0x48114a + 1] && (this.memberDay_redPacket_map[_0x48114a + 1] = 0), this.memberDay_redPacket_map[_0x48114a + 1]++;else {
        let _0x21b646 = _0x5d0f41?.["errorMessage"] || (_0x5d0f41 ? JSON.stringify(_0x5d0f41) : "无返回");
        this.log("会员日合成两个[" + _0x48114a + "级]红包失败: " + _0x21b646);
        if (_0x21b646?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x4f8910 = {
            "notify": true
          };
          this.log("会员日任务风控", _0x4f8910);
        }
      }
    } catch (_0x2fa2b0) {
      console.log(_0x2fa2b0);
    }
  }
  async ["memberDay_redPacketDraw"](_0x594be6, _0x187b4c = {}) {
    try {
      let _0x284e88 = {
          "fn": "memberDay_redPacketDraw",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketDraw",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "level": _0x594be6.toString()
          }
        },
        {
          result: _0x48ce80
        } = await this.request(_0x284e88);
      if (_0x48ce80?.["success"]) {
        let _0x5506d5 = _0x48ce80?.["obj"]?.["map"](_0x3599a9 => _0x3599a9.couponName) || [];
        const _0x1f2bcd = {
          "notify": true
        };
        this.log("会员日提取[" + _0x594be6 + "级]红包: " + (_0x5506d5.join(", ") || "空气"), _0x1f2bcd);
      } else {
        let _0x27123d = _0x48ce80?.["errorMessage"] || (_0x48ce80 ? JSON.stringify(_0x48ce80) : "无返回");
        this.log("会员日提取[" + _0x594be6 + "级]红包失败: " + _0x27123d);
        if (_0x27123d?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3b9239 = {
            "notify": true
          };
          this.log("会员日任务风控", _0x3b9239);
        }
      }
    } catch (_0x9fc179) {
      console.log(_0x9fc179);
    }
  }
  async ["jika2024_taskList"](_0x32c87b = {}) {
    try {
      let _0x331a46 = {
          "fn": "jika2024_taskList",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "activityCode": _0xb8d615,
            "channelType": "MINI_PROGRAM"
          }
        },
        {
          result: _0x330525
        } = await this.request(_0x331a46);
      if (_0x330525?.["success"]) {
        let _0x249596 = _0x330525?.["obj"] || [];
        for (let _0x56e341 of _0x249596.filter(_0x4f1ade => _0x4f1ade.status == 1)) {
          if (this.jika_black) {
            return;
          }
          for (let _0x3806ed = 0; _0x3806ed < _0x56e341.canReceiveTokenNum; _0x3806ed++) {
            await this.jika2024_fetchMixTaskReward(_0x56e341);
          }
        }
        for (let _0x821afa of _0x249596.filter(_0x4eb084 => _0x4eb084.status == 2)) {
          if (this.jika_black) return;
          switch (_0x821afa.taskType) {
            case "PLAY_ACTIVITY_GAME":
              {
                this.log("开始玩新年集卡猜成语");
                for (let _0xd675bb = 1; _0xd675bb <= 10; _0xd675bb++) {
                  let _0x38c643 = Math.floor(Math.random() * 3000) + 1000;
                  await _0x1366a8.wait(_0x38c643);
                  await this.jika2024_chengyu_win(_0xd675bb);
                }
                break;
              }
            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }
            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x55b45e = 0; _0x55b45e < _0x821afa.restFinishTime && !this.jika_black; _0x55b45e++) {
                  await this.jika2024_finishTask(_0x821afa);
                }
                break;
              }
          }
        }
      } else this.log("查询新年集卡任务失败: " + (_0x330525?.["errorMessage"] || (_0x330525 ? JSON.stringify(_0x330525) : "无返回")));
    } catch (_0x2b43de) {
      console.log(_0x2b43de);
    }
  }
  async ["jika2024_finishTask"](_0x39f817, _0x2c0200 = {}) {
    try {
      const _0xd8af5b = {
        "taskCode": _0x39f817.taskCode
      };
      let _0x10ee35 = {
          "fn": "jika2024_finishTask",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          "headers": {
            ...this.getSign()
          },
          "json": _0xd8af5b
        },
        {
          result: _0x3dee82
        } = await this.request(_0x10ee35);
      _0x3dee82?.["success"] ? (this.log("完成新年集卡任务[" + _0x39f817.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0x39f817)) : this.log("完成新年集卡任务[" + _0x39f817.taskName + "]失败: " + (_0x3dee82?.["errorMessage"] || (_0x3dee82 ? JSON.stringify(_0x3dee82) : "无返回")));
    } catch (_0x106295) {
      console.log(_0x106295);
    }
  }
  async ["jika2024_fetchMixTaskReward"](_0xa87084, _0x140f7d = {}) {
    try {
      const _0x430920 = {
        "taskType": _0xa87084.taskType,
        "activityCode": _0xb8d615,
        "channelType": "MINI_PROGRAM"
      };
      let _0x163a21 = {
          "fn": "jika2024_fetchMixTaskReward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonNoLoginPost/~memberNonactivity~yearEnd2023TaskService~fetchMixTaskReward",
          "headers": {
            ...this.getSign()
          },
          "json": _0x430920
        },
        {
          result: _0x5f56cb
        } = await this.request(_0x163a21);
      if (_0x5f56cb?.["success"]) {
        let _0x514ed3 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x5f56cb.obj;
        for (let _0x3ca707 of receivedAccountList) {
          _0x514ed3.push("" + (_0xd3a68c[_0x3ca707.currency] || "[" + _0x3ca707.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x514ed3.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("领取任务[" + _0xa87084.taskName + "]奖励: " + _0x514ed3.join(", "));
      } else {
        let _0x15cf8e = _0x5f56cb?.["errorMessage"] || (_0x5f56cb ? JSON.stringify(_0x5f56cb) : "无返回");
        this.log("领取任务[" + _0xa87084.taskName + "]奖励失败: " + _0x15cf8e);
        _0x15cf8e?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x29d730) {
      console.log(_0x29d730);
    }
  }
  async ["jika2024_getAward"](_0x23c6e0, _0x283045 = {}) {
    try {
      const _0x5c6f9d = {
        "cardType": _0x23c6e0
      };
      let _0x5e1088 = {
          "fn": "jika2024_getAward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GardenPartyService~getAward",
          "headers": {
            ...this.getSign()
          },
          "json": _0x5c6f9d
        },
        {
          result: _0x842903
        } = await this.request(_0x5e1088);
      if (_0x842903?.["success"]) {
        let _0x24766d = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x842903.obj;
        for (let _0x4de2ac of receivedAccountList) {
          _0x24766d.push("" + (_0xd3a68c[_0x4de2ac.currency] || "[" + _0x4de2ac.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x24766d.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("逛集市领卡奖励: " + _0x24766d.join(", "));
      } else {
        let _0xd6ffdd = _0x842903?.["errorMessage"] || (_0x842903 ? JSON.stringify(_0x842903) : "无返回");
        this.log("逛集市领卡失败: " + _0xd6ffdd);
        _0xd6ffdd?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x2a8daa) {
      console.log(_0x2a8daa);
    }
  }
  async ["jika2024_chengyu_index"](_0x4ba743 = {}) {
    try {
      let _0x4609d3 = {
          "fn": "jika2024_chengyu_index",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~index",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x15e0e2
        } = await this.request(_0x4609d3);
      if (_0x15e0e2?.["success"]) {
        if (_0x15e0e2?.["obj"]?.["bigCardFlag"]) this.log("今天已完成新年集卡猜成语");else {
          this.log("开始玩新年集卡猜成语");
          for (let _0x2d91d4 = 1; _0x2d91d4 <= 10; _0x2d91d4++) {
            let _0x1ced62 = Math.floor(Math.random() * 3000) + 1000;
            await _0x1366a8.wait(_0x1ced62);
            await this.jika2024_chengyu_win(_0x2d91d4);
          }
        }
      } else this.log("查询新年集卡猜成语任务失败: " + (_0x15e0e2?.["errorMessage"] || (_0x15e0e2 ? JSON.stringify(_0x15e0e2) : "无返回")));
    } catch (_0x3b5c4c) {
      console.log(_0x3b5c4c);
    }
  }
  async ["jika2024_chengyu_win"](_0x2e2ea8, _0x1ec91f = {}) {
    try {
      const _0x297ecb = {
        "index": _0x2e2ea8
      };
      let _0x5ef77c = {
          "fn": "jika2024_chengyu_win",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~win",
          "headers": {
            ...this.getSign()
          },
          "json": _0x297ecb
        },
        {
          result: _0x2d3f51
        } = await this.request(_0x5ef77c);
      if (_0x2d3f51?.["success"]) {
        let {
          isAward: _0x922982,
          currencyDTOList: _0xd01f7
        } = _0x2d3f51?.["obj"];
        if (_0x922982) {
          let _0x34e1ad = [];
          for (let _0x4e9e92 of _0xd01f7) {
            _0x34e1ad.push("" + (_0xd3a68c[_0x4e9e92.currency] || "[" + _0x4e9e92.currency + "]"));
          }
          this.log("猜成语第" + _0x2e2ea8 + "关通关成功: " + _0x34e1ad.join(", "));
        } else this.log("猜成语第" + _0x2e2ea8 + "关通关成功");
      } else {
        let _0x4f0106 = _0x2d3f51?.["errorMessage"] || (_0x2d3f51 ? JSON.stringify(_0x2d3f51) : "无返回");
        this.log("猜成语第" + _0x2e2ea8 + "关失败: " + _0x4f0106);
        _0x4f0106?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x5c7a10) {
      console.log(_0x5c7a10);
    }
  }
  async ["jika2024_cardStatus"](_0x16d0d3 = {}) {
    try {
      let _0x4af1f4 = {
          "fn": "jika2024_cardStatus",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~cardStatus",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x32fa21
        } = await this.request(_0x4af1f4);
      if (_0x32fa21?.["success"]) {
        let _0xa4f3d4 = _0x32fa21?.["obj"]?.["accountList"] || [];
        if (_0xa4f3d4?.["length"]) {
          this.cards = _0xa4f3d4.filter(_0x3f8777 => _0x3f8777.balance > 0);
          this.cards.sort((_0x2d9cec, _0x9bb2ce) => {
            return _0x9bb2ce.balance - _0x2d9cec.balance;
          });
          let _0x2b78d7 = [];
          for (let _0x1297bf of this.cards) {
            let _0x2484f0 = _0xd3a68c[_0x1297bf.currency] || "[" + _0x1297bf.currency + "]";
            _0x2b78d7.push(_0x2484f0 + "X" + _0x1297bf.balance);
          }
          const _0x10586b = {
            "notify": true
          };
          this.log("年卡: " + _0x2b78d7.join(", "), _0x10586b);
          if (this.cards.filter(_0x1e7082 => _0x1e7082.balance > 0).filter(_0x329acd => _0x329acd.currency == "COMMON_CARD").length > 0) {
            const _0x1650d = {
              "notify": true
            };
            this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0x1650d);
            return;
          }
          while (this.cards.filter(_0x39fbc0 => _0x39fbc0.balance > 0).length >= 3 && !this.jika_black) {
            await this.jika2024_collectDrawAward();
          }
        } else {
          const _0x2a2894 = {
            "notify": true
          };
          this.log("还没有收集到年卡", _0x2a2894);
        }
      } else this.log("查询已收集年卡失败: " + (_0x32fa21?.["errorMessage"] || (_0x32fa21 ? JSON.stringify(_0x32fa21) : "无返回")));
    } catch (_0x52a803) {
      console.log(_0x52a803);
    }
  }
  async ["jika2024_collectDrawAward"](_0x108d3c = {}) {
    try {
      let _0x52f112 = this.cards.filter(_0x13cd43 => _0x13cd43.balance > 0).map(_0x5ad555 => _0x5ad555.currency);
      _0x52f112.length > 6 && (_0x52f112 = _0x52f112.slice(0, 6));
      const _0x296637 = {
        "accountList": _0x52f112
      };
      let _0x15613f = {
          "fn": "jika2024_collectDrawAward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~collectDrawAward",
          "headers": {
            ...this.getSign()
          },
          "json": _0x296637
        },
        {
          result: _0x1e4421
        } = await this.request(_0x15613f);
      if (_0x1e4421?.["success"]) {
        let {
          productName: _0xbebe3c
        } = _0x1e4421?.["obj"];
        const _0x4ac392 = {
          "notify": true
        };
        this.log("使用" + _0x52f112.length + "种年卡合成: " + _0xbebe3c, _0x4ac392);
        for (let _0x2898b1 of this.cards) {
          _0x52f112.includes(_0x2898b1.currency) && (_0x2898b1.balance -= 1);
        }
      } else {
        let _0x271bf3 = _0x1e4421?.["errorMessage"] || (_0x1e4421 ? JSON.stringify(_0x1e4421) : "无返回");
        this.log("使用" + _0x52f112.length + "种年卡合成失败: " + _0x271bf3);
        _0x271bf3?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x320a3e) {
      console.log(_0x320a3e);
    }
  }
  async ["jika2024_task"](_0x4bb1f6 = {}) {
    await this.jika2024_cardStatus();
  }
  async ["anniversary2024_weeklyGiftStatus"](_0x6e4e41 = {}) {
    try {
      let _0x324eb5 = {
          "fn": "anniversary2024_weeklyGiftStatus",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~weeklyGiftStatus",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x48a20a
        } = await this.request(_0x324eb5);
      if (_0x48a20a?.["success"]) {
        let _0x45558f = _0x48a20a?.["obj"]?.["weeklyGiftList"] || [];
        for (let _0xe99516 of _0x45558f) {
          if (!_0xe99516.received) {
            let _0x23979e = new Date(_0xe99516.receiveStartTime),
              _0xc3c937 = new Date(_0xe99516.receiveEndTime),
              _0x402214 = Date.now();
            _0x402214 >= _0x23979e.getTime() && _0x402214 <= _0xc3c937.getTime() && (await this.anniversary2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x3ae387 = _0x48a20a?.["errorMessage"] || (_0x48a20a ? JSON.stringify(_0x48a20a) : "无返回");
        this.log("查询周年庆每周领券失败: " + _0x3ae387);
        (_0x3ae387?.["includes"]("系统繁忙") || _0x3ae387?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x15f8fc) {
      console.log(_0x15f8fc);
    }
  }
  async ["anniversary2024_receiveWeeklyGift"](_0x32579 = {}) {
    try {
      let _0x29b3e6 = {
          "fn": "anniversary2024_receiveWeeklyGift",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~receiveWeeklyGift",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x303d6d
        } = await this.request(_0x29b3e6);
      if (_0x303d6d?.["success"]) {
        let _0x19e28e = _0x303d6d?.["obj"]?.["map"](_0x2af0f9 => _0x2af0f9.productName);
        this.log("周年庆每周领券: " + _0x19e28e.join(", "));
      } else {
        let _0x1bd7a6 = _0x303d6d?.["errorMessage"] || (_0x303d6d ? JSON.stringify(_0x303d6d) : "无返回");
        this.log("周年庆每周领券失败: " + _0x1bd7a6);
        (_0x1bd7a6?.["includes"]("系统繁忙") || _0x1bd7a6?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x3dc035) {
      console.log(_0x3dc035);
    }
  }
  async ["anniversary2024_taskList"](_0x37b8ca = {}) {
    try {
      let _0x28f186 = {
          "fn": "anniversary2024_taskList",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "activityCode": _0x4c1524,
            "channelType": "MINI_PROGRAM"
          }
        },
        {
          result: _0x47be8f
        } = await this.request(_0x28f186);
      if (_0x47be8f?.["success"]) {
        let _0xe22f99 = _0x47be8f?.["obj"] || [];
        for (let _0x358737 of _0xe22f99.filter(_0x1516cf => _0x1516cf.status == 1)) {
          if (this.anniversary_black) {
            return;
          }
          for (let _0x1b81e7 = 0; _0x1b81e7 < _0x358737.canReceiveTokenNum; _0x1b81e7++) {
            await this.anniversary2024_fetchMixTaskReward(_0x358737);
          }
        }
        for (let _0x348a70 of _0xe22f99.filter(_0x36310d => _0x36310d.status == 2)) {
          if (this.anniversary_black) return;
          switch (_0x348a70.taskType) {
            case "PLAY_ACTIVITY_GAME":
            case "PLAY_HAPPY_ELIMINATION":
            case "PARTAKE_SUBJECT_GAME":
              {
                break;
              }
            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }
            case "BROWSE_VIP_CENTER":
            case "GUESS_GAME_TIP":
            case "CREATE_SFID":
            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x5f3be2 = 0; _0x5f3be2 < _0x348a70.restFinishTime && !this.anniversary_black; _0x5f3be2++) {
                  await this.anniversary2024_finishTask(_0x348a70);
                }
                break;
              }
          }
        }
      } else this.log("查询任务失败: " + (_0x47be8f?.["errorMessage"] || (_0x47be8f ? JSON.stringify(_0x47be8f) : "无返回")));
    } catch (_0xea883e) {
      console.log(_0xea883e);
    }
  }
  async ["anniversary2024_finishTask"](_0x2c987c, _0x32e9c3 = {}) {
    try {
      const _0x3d0846 = {
        "taskCode": _0x2c987c.taskCode
      };
      let _0x288987 = {
          "fn": "anniversary2024_finishTask",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          "headers": {
            ...this.getSign()
          },
          "json": _0x3d0846
        },
        {
          result: _0xfaf6f2
        } = await this.request(_0x288987);
      _0xfaf6f2?.["success"] ? (this.log("完成任务[" + _0x2c987c.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0x2c987c)) : this.log("完成任务[" + _0x2c987c.taskName + "]失败: " + (_0xfaf6f2?.["errorMessage"] || (_0xfaf6f2 ? JSON.stringify(_0xfaf6f2) : "无返回")));
    } catch (_0x498eab) {
      console.log(_0x498eab);
    }
  }
  async ["anniversary2024_fetchMixTaskReward"](_0x34d21e, _0x386ded = {}) {
    try {
      let _0x328e1a = {
          "fn": "anniversary2024_fetchMixTaskReward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TaskService~fetchMixTaskReward",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "taskType": _0x34d21e.taskType,
            "activityCode": _0x4c1524,
            "channelType": "MINI_PROGRAM"
          }
        },
        {
          result: _0x5434b2
        } = await this.request(_0x328e1a);
      if (_0x5434b2?.["success"]) {
        let _0x5c8e79 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x5434b2?.["obj"]?.["account"];
        for (let _0x435eaa of receivedAccountList) {
          _0x5c8e79.push("[" + _0x435eaa.currency + "]X" + _0x435eaa.amount);
        }
        turnedAward?.["productName"] && _0x5c8e79.push("[优惠券]" + turnedAward?.["productName"]);
        this.log("领取任务[" + _0x34d21e.taskName + "]奖励: " + _0x5c8e79.join(", "));
      } else {
        let _0x5f4c09 = _0x5434b2?.["errorMessage"] || (_0x5434b2 ? JSON.stringify(_0x5434b2) : "无返回");
        this.log("领取任务[" + _0x34d21e.taskName + "]奖励失败: " + _0x5f4c09);
        _0x5f4c09?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x2092a0) {
      console.log(_0x2092a0);
    }
  }
  async ["anniversary2024_unbox"](_0x47c904 = {}) {
    try {
      let _0x72e14c = {
          "fn": "anniversary2024_unbox",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~unbox",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x1e4002
        } = await this.request(_0x72e14c);
      if (_0x1e4002?.["success"]) {
        let _0x5d7494 = [],
          _0x41ebde = _0x1e4002?.["obj"]?.["account"]?.["receivedAccountList"] || [];
        for (let _0x4b8712 of _0x41ebde) {
          _0x5d7494.push("[" + _0x4b8712.currency + "]X" + _0x4b8712.amount);
        }
        this.log("拆盒子: " + (_0x5d7494.join(", ") || "空气"));
      } else {
        let _0x392258 = _0x1e4002?.["errorMessage"] || (_0x1e4002 ? JSON.stringify(_0x1e4002) : "无返回");
        this.log("拆盒子失败: " + _0x392258);
        _0x392258?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x31d92c) {
      console.log(_0x31d92c);
    }
  }
  async ["anniversary2024_game_list"](_0x5bde8a = {}) {
    try {
      let _0x5b6ae6 = {
          "fn": "anniversary2024_game_list",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GameParkService~list",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x231a59
        } = await this.request(_0x5b6ae6);
      if (_0x231a59?.["success"]) {
        let {
          topicPKInfo: _0x12a645,
          searchWordInfo: _0x2305f3,
          happyEliminationInfo: _0x2433a8
        } = _0x231a59?.["obj"];
        !_0x12a645?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());
        if (!_0x2305f3?.["isPassFlag"] || !_0x2305f3?.["isFinishDailyFlag"]) {
          this.log("开始找字游戏");
          for (let _0x325b38 = 1; _0x325b38 <= 10; _0x325b38++) {
            let _0x245e77 = Math.floor(Math.random() * 2000) + 1000;
            await _0x1366a8.wait(_0x245e77);
            if (!(await this.anniversary2024_SearchWord_win(_0x325b38))) break;
          }
        }
        if (!_0x2433a8?.["isPassFlag"] || !_0x2433a8?.["isFinishDailyFlag"]) {
          this.log("开始消消乐");
          for (let _0x25b529 = 1; _0x25b529 <= 30; _0x25b529++) {
            let _0x5ac7c0 = Math.floor(Math.random() * 2000) + 1000;
            await _0x1366a8.wait(_0x5ac7c0);
            if (!(await this.anniversary2024_HappyElimination_win(_0x25b529))) break;
          }
        }
      } else {
        let _0x2a1ee2 = _0x231a59?.["errorMessage"] || (_0x231a59 ? JSON.stringify(_0x231a59) : "无返回");
        this.log("查询游戏状态失败: " + _0x2a1ee2);
        _0x2a1ee2?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x3fc045) {
      console.log(_0x3fc045);
    }
  }
  async ["anniversary2024_SearchWord_win"](_0x42fb83, _0x304a0f = {}) {
    let _0x2af86a = true;
    try {
      const _0x1dd180 = {
        "index": _0x42fb83
      };
      let _0x4fbc11 = {
          "fn": "anniversary2024_SearchWord_win",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024SearchWordService~win",
          "headers": {
            ...this.getSign()
          },
          "json": _0x1dd180
        },
        {
          result: _0xfa3d0f
        } = await this.request(_0x4fbc11);
      if (_0xfa3d0f?.["success"]) {
        let {
          currencyDTOList = []
        } = _0xfa3d0f?.["obj"];
        if (currencyDTOList?.["length"]) {
          let _0x42a285 = [];
          for (let _0x58c9c4 of currencyDTOList) {
            _0x42a285.push("[" + _0x58c9c4.currency + "]X" + _0x58c9c4.amount);
          }
          this.log("找字游戏第" + _0x42fb83 + "关通关成功: " + _0x42a285.join(", "));
        } else this.log("找字游戏第" + _0x42fb83 + "关通关成功");
      } else {
        let _0x51a158 = _0xfa3d0f?.["errorMessage"] || (_0xfa3d0f ? JSON.stringify(_0xfa3d0f) : "无返回");
        this.log("找字游戏第" + _0x42fb83 + "关失败: " + _0x51a158);
        _0x51a158?.["includes"]("系统繁忙") && (_0x2af86a = false);
      }
    } catch (_0x26cf90) {
      console.log(_0x26cf90);
    } finally {
      return _0x2af86a;
    }
  }
  async ["anniversary2024_HappyElimination_win"](_0x32aeec, _0x41fa9f = {}) {
    let _0x41d81f = true;
    try {
      const _0x3516d8 = {
        "index": _0x32aeec
      };
      let _0x4c9948 = {
          "fn": "anniversary2024_HappyElimination_win",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024HappyEliminationService~win",
          "headers": {
            ...this.getSign()
          },
          "json": _0x3516d8
        },
        {
          result: _0x66a02a
        } = await this.request(_0x4c9948);
      if (_0x66a02a?.["success"]) {
        let {
          isAward: _0x75eb78,
          currencyDTOList: _0x5ee040
        } = _0x66a02a?.["obj"];
        if (_0x75eb78) {
          let _0x597e06 = [];
          for (let _0x403a80 of _0x5ee040) {
            _0x597e06.push("[" + _0x403a80.currency + "]X" + _0x403a80.amount);
          }
          this.log("消消乐第" + _0x32aeec + "关通关成功: " + _0x597e06.join(", "));
        } else this.log("消消乐第" + _0x32aeec + "关通关成功");
      } else {
        let _0x16b1b4 = _0x66a02a?.["errorMessage"] || (_0x66a02a ? JSON.stringify(_0x66a02a) : "无返回");
        this.log("消消乐第" + _0x32aeec + "关失败: " + _0x16b1b4);
        _0x16b1b4?.["includes"]("系统繁忙") && (_0x41d81f = false);
      }
    } catch (_0xd7792b) {
      console.log(_0xd7792b);
    } finally {
      return _0x41d81f;
    }
  }
  async ["anniversary2024_TopicPk_topicList"](_0x2def44 = {}) {
    try {
      let _0x177789 = {
          "fn": "anniversary2024_TopicPk_topicList",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~topicList",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x181b71
        } = await this.request(_0x177789);
      if (_0x181b71?.["success"]) {
        let _0x8eb9f4 = _0x181b71?.["obj"]?.["topics"] || [],
          _0x37d818 = _0x8eb9f4?.["filter"](_0x4cc2f1 => !_0x4cc2f1?.["choose"])?.[0]?.["index"] || 1;
        for (let _0x3a5243 = parseInt(_0x37d818); _0x3a5243 <= 12; _0x3a5243++) {
          let _0x35500c = Math.floor(Math.random() * 2000) + 2000;
          await _0x1366a8.wait(_0x35500c);
          if (!(await this.anniversary2024_TopicPk_chooseSide(_0x3a5243))) break;
        }
      } else {
        let _0x1dc43d = _0x181b71?.["errorMessage"] || (_0x181b71 ? JSON.stringify(_0x181b71) : "无返回");
        this.log("查询话题PK赛记录失败: " + _0x1dc43d);
        _0x1dc43d?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x2d0ebb) {
      console.log(_0x2d0ebb);
    }
  }
  async ["anniversary2024_queryAccountStatus_refresh"](_0x463013 = {}) {
    try {
      let _0x13abe7 = {
        "fn": "anniversary2024_queryAccountStatus_refresh",
        "method": "post",
        "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        "headers": {
          ...this.getSign()
        },
        "json": {}
      };
      await this.request(_0x13abe7);
    } catch (_0x44230e) {
      console.log(_0x44230e);
    }
  }
  async ["anniversary2024_TopicPk_chooseSide"](_0x1d319e, _0x4b04b8 = {}) {
    let _0x548c95 = true;
    try {
      const _0xced8ed = {
        "index": _0x1d319e,
        "choose": 0
      };
      let _0x31f6b3 = {
          "fn": "anniversary2024_TopicPk_chooseSide",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~chooseSide",
          "headers": {
            ...this.getSign()
          },
          "json": _0xced8ed
        },
        {
          result: _0x12f08d
        } = await this.request(_0x31f6b3);
      if (_0x12f08d?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x12f08d?.["obj"];
        if (currencyDTOList.length) {
          let _0x411dc0 = [];
          for (let _0x533c09 of currencyDTOList) {
            _0x411dc0.push("[" + _0x533c09.currency + "]X" + _0x533c09.amount);
          }
          this.log("话题PK赛第" + _0x1d319e + "个话题选择成功: " + _0x411dc0.join(", "));
        } else this.log("话题PK赛第" + _0x1d319e + "个话题选择成功");
      } else {
        let _0x17caba = _0x12f08d?.["errorMessage"] || (_0x12f08d ? JSON.stringify(_0x12f08d) : "无返回");
        this.log("话题PK赛第" + _0x1d319e + "个话题失败: " + _0x17caba);
        _0x17caba?.["includes"]("系统繁忙") && (_0x548c95 = false);
      }
    } catch (_0x80ee97) {
      console.log(_0x80ee97);
    } finally {
      return _0x548c95;
    }
  }
  async ["anniversary2024_titleList"](_0x128817 = {}) {
    try {
      let _0x4e679e = {
          "fn": "anniversary2024_titleList",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x10125f
        } = await this.request(_0x4e679e);
      if (_0x10125f?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x10125f?.["obj"],
          _0x49b680 = _0x1366a8.time("yyyy-MM-dd"),
          _0x476a35 = guessTitleInfoList.filter(_0xefcd07 => _0xefcd07.gameDate == _0x49b680);
        if (_0x476a35.length > 0) {
          let _0x4dbc05 = _0x476a35[0];
          if (_0x4dbc05.answerStatus) this.log("今日已回答过竞猜");else {
            let _0x3d76b4 = _0x479306?.["answer"]?.[_0x49b680];
            _0x479306?.["answer"]?.[_0x49b680] && (await this.anniversary2024_answer(_0x4dbc05, _0x3d76b4));
          }
        } else this.log("没有查询到今日竞猜题目");
      } else {
        let _0x4a1ac7 = _0x10125f?.["errorMessage"] || (_0x10125f ? JSON.stringify(_0x10125f) : "无返回");
        this.log("查询每日口令竞猜失败: " + _0x4a1ac7);
      }
    } catch (_0x17f52e) {
      console.log(_0x17f52e);
    }
  }
  async ["anniversary2024_titleList_award"](_0x26cdd3 = {}) {
    try {
      let _0x3fca4a = {
          "fn": "anniversary2024_titleList_award",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x3482d4
        } = await this.request(_0x3fca4a);
      if (_0x3482d4?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x3482d4?.["obj"],
          _0x43c715 = _0x1366a8.time("yyyy-MM-dd"),
          _0x22d98d = guessTitleInfoList.filter(_0x29a76d => _0x29a76d.gameDate == _0x43c715);
        if (_0x22d98d.length > 0) {
          let _0x12a1e5 = _0x22d98d[0];
          if (_0x12a1e5.answerStatus) {
            let _0x373b85 = [],
              {
                awardList = [],
                puzzleList = []
              } = _0x12a1e5;
            _0x373b85 = _0x373b85.concat(awardList.map(_0x18c28c => _0x18c28c.productName));
            _0x373b85 = _0x373b85.concat(puzzleList.map(_0x2de43e => "[" + _0x2de43e.currency + "]X" + _0x2de43e.amount));
            const _0xeb5853 = {
              "notify": true
            };
            this.log("口令竞猜奖励: " + (_0x373b85.join(", ") || "空气"), _0xeb5853);
          } else this.log("今日还没回答竞猜");
        } else this.log("没有查询到今日竞猜奖励");
      } else {
        let _0x5bc86c = _0x3482d4?.["errorMessage"] || (_0x3482d4 ? JSON.stringify(_0x3482d4) : "无返回");
        this.log("查询每日口令竞猜奖励失败: " + _0x5bc86c);
      }
    } catch (_0x19d166) {
      console.log(_0x19d166);
    }
  }
  async ["anniversary2024_answer"](_0x262e5e, _0x138e14, _0x22374f = {}) {
    try {
      const _0x5aaa75 = {
        "period": _0x262e5e.period,
        "answerInfo": _0x138e14
      };
      let _0x182455 = {
          "fn": "anniversary2024_answer",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~answer",
          "headers": {
            ...this.getSign()
          },
          "json": _0x5aaa75
        },
        {
          result: _0x42f55e
        } = await this.request(_0x182455);
      if (_0x42f55e?.["success"]) this.log("口令竞猜回答成功"), await this.anniversary2024_titleList_award();else {
        let _0x50c8d3 = _0x42f55e?.["errorMessage"] || (_0x42f55e ? JSON.stringify(_0x42f55e) : "无返回");
        this.log("口令竞猜回答失败: " + _0x50c8d3);
      }
    } catch (_0x556231) {
      console.log(_0x556231);
    }
  }
  async ["anniversary2024_queryAccountStatus"](_0x29d05c = {}) {
    try {
      let _0x29f1c5 = {
        "fn": "anniversary2024_queryAccountStatus",
        "method": "post",
        "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        "headers": {
          ...this.getSign()
        },
        "json": {}
      };
      {
        let {
          result: _0x20a764
        } = await this.request(_0x29f1c5);
        if (_0x20a764?.["success"]) {
          let _0x5447e7 = _0x20a764?.["obj"]?.["accountCurrencyList"] || [],
            _0x24e843 = _0x5447e7.filter(_0x5484a5 => _0x5484a5.currency == "UNBOX_CHANCE"),
            _0x13ee24 = _0x24e843?.[0]?.["balance"] || 0;
          this.log("可以拆" + _0x13ee24 + "次盒子");
          while (_0x13ee24-- > 0) {
            await this.anniversary2024_unbox();
          }
        } else this.log("查询已收集拼图失败: " + (_0x20a764?.["errorMessage"] || (_0x20a764 ? JSON.stringify(_0x20a764) : "无返回")));
      }
      {
        let {
          result: _0x290dba
        } = await this.request(_0x29f1c5);
        if (_0x290dba?.["success"]) {
          let _0x5bccc4 = _0x290dba?.["obj"]?.["accountCurrencyList"] || [];
          _0x5bccc4 = _0x5bccc4.filter(_0x4c57cd => _0x4c57cd.currency != "UNBOX_CHANCE");
          if (_0x5bccc4?.["length"]) {
            this.cards = _0x5bccc4;
            let _0x55d94e = [];
            for (let _0x39b04a of this.cards) {
              _0x55d94e.push("[" + _0x39b04a.currency + "]X" + _0x39b04a.balance);
            }
            const _0x2da17a = {
              "notify": true
            };
            this.log("拼图: " + _0x55d94e.join(", "), _0x2da17a);
            this.cards.sort((_0x79a93e, _0xf62a06) => {
              return _0xf62a06.balance - _0x79a93e.balance;
            });
          } else {
            const _0x2851f3 = {
              "notify": true
            };
            this.log("还没有收集到拼图", _0x2851f3);
          }
        } else this.log("查询已收集拼图失败: " + (_0x290dba?.["errorMessage"] || (_0x290dba ? JSON.stringify(_0x290dba) : "无返回")));
      }
    } catch (_0x2fb920) {
      console.log(_0x2fb920);
    }
  }
  async ["anniversary2024_queryAccountStatus_card"](_0x13dc7c = {}) {
    try {
      let _0x4bf94e = {
          "fn": "anniversary2024_queryAccountStatus_card",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x16bcea
        } = await this.request(_0x4bf94e);
      if (_0x16bcea?.["success"]) {
        let _0x4cd343 = _0x16bcea?.["obj"]?.["accountCurrencyList"] || [];
        _0x4cd343 = _0x4cd343.filter(_0x4095d8 => _0x4095d8.currency != "UNBOX_CHANCE");
        if (_0x4cd343?.["length"]) {
          this.cards = _0x4cd343.sort((_0x572b05, _0x51bfed) => {
            return _0x51bfed.balance - _0x572b05.balance;
          });
          let _0x565211 = [];
          for (let _0x41c7ad of this.cards) {
            _0x565211.push("[" + _0x41c7ad.currency + "]X" + _0x41c7ad.balance);
          }
          const _0x196953 = {
            "notify": true
          };
          this.log("拼图: " + _0x565211.join(", "), _0x196953);
          while (this.cards.filter(_0x215fc2 => _0x215fc2.balance > 0).length >= 3 && !this.anniversary_black) {
            await this.anniversary2024_collectDrawAward();
          }
        } else {
          const _0x218319 = {
            "notify": true
          };
          this.log("还没有收集到拼图", _0x218319);
        }
      } else this.log("查询已收集拼图失败: " + (_0x16bcea?.["errorMessage"] || (_0x16bcea ? JSON.stringify(_0x16bcea) : "无返回")));
    } catch (_0x442962) {
      console.log(_0x442962);
    }
  }
  async ["anniversary2024_collectDrawAward"](_0x3aa614 = {}) {
    try {
      this.cards = this.cards.sort((_0x2342e8, _0x5a2695) => {
        return _0x5a2695.balance - _0x2342e8.balance;
      });
      let _0xa772a9 = this.cards.filter(_0x125525 => _0x125525.balance > 0).map(_0x4f0853 => _0x4f0853.currency);
      if (_0xa772a9.length == 9) _0xa772a9 = _0xa772a9.slice(0, 9);else {
        if (_0xa772a9.length >= 7) _0xa772a9 = _0xa772a9.slice(0, 7);else {
          if (_0xa772a9.length >= 5) _0xa772a9 = _0xa772a9.slice(0, 5);else _0xa772a9.length >= 3 && (_0xa772a9 = _0xa772a9.slice(0, 3));
        }
      }
      const _0x33d154 = {
        "accountList": _0xa772a9
      };
      let _0x33d9cd = {
          "fn": "anniversary2024_collectDrawAward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~collectDrawAward",
          "headers": {
            ...this.getSign()
          },
          "json": _0x33d154
        },
        {
          result: _0x440e17
        } = await this.request(_0x33d9cd);
      if (_0x440e17?.["success"]) {
        let {
          productName: _0x293d39
        } = _0x440e17?.["obj"];
        const _0x319fd2 = {
          "notify": true
        };
        this.log("使用" + _0xa772a9.length + "种卡合成: " + _0x293d39, _0x319fd2);
        for (let _0x586865 of this.cards) {
          _0xa772a9.includes(_0x586865.currency) && (_0x586865.balance -= 1);
        }
      } else {
        let _0xb1a1b8 = _0x440e17?.["errorMessage"] || (_0x440e17 ? JSON.stringify(_0x440e17) : "无返回");
        this.log("使用" + _0xa772a9.length + "种年卡合成失败: " + _0xb1a1b8);
        _0xb1a1b8?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x3698cd) {
      console.log(_0x3698cd);
    }
  }
  async ["dragonBoat2024_weeklyGiftStatus"](_0x5e0c76 = {}) {
    try {
      let _0x1dc0c5 = {
          "fn": "dragonBoat2024_weeklyGiftStatus",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~weeklyGiftStatus",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x2c6feb
        } = await this.request(_0x1dc0c5);
      if (_0x2c6feb?.["success"]) {
        let _0x48d8d4 = _0x2c6feb?.["obj"] || [];
        for (let _0x22db02 of _0x48d8d4) {
          if (!_0x22db02.received) {
            let _0x259e9a = new Date(_0x22db02.receiveStartTime),
              _0x1e96c8 = new Date(_0x22db02.receiveEndTime),
              _0x40ffcc = Date.now();
            _0x40ffcc >= _0x259e9a.getTime() && _0x40ffcc <= _0x1e96c8.getTime() && (await this.dragonBoat2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x2ca8cd = _0x2c6feb?.["errorMessage"] || (_0x2c6feb ? JSON.stringify(_0x2c6feb) : "无返回");
        this.log("端午查询每周领券失败: " + _0x2ca8cd);
        (_0x2ca8cd?.["includes"]("系统繁忙") || _0x2ca8cd?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0xbf4a5c) {
      console.log(_0xbf4a5c);
    }
  }
  async ["dragonBoat2024_receiveWeeklyGift"](_0x1034cf = {}) {
    try {
      let _0x10d94c = _0x1366a8.randomList(_0x11aa2a.filter(_0x243ea2 => _0x243ea2 != this.userId));
      const _0x195b26 = {
        "inviteUserId": _0x10d94c,
        "moduleType": "welfare_card"
      };
      let _0x5b9a9e = {
          "fn": "dragonBoat2024_receiveWeeklyGift",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~receiveWeeklyGift",
          "headers": {
            ...this.getSign()
          },
          "json": _0x195b26
        },
        {
          result: _0x2ec4df
        } = await this.request(_0x5b9a9e);
      if (_0x2ec4df?.["success"]) {
        let _0x19709c = _0x2ec4df?.["obj"]?.["map"](_0x53cf21 => _0x53cf21.productName);
        this.log("端午每周领券: " + _0x19709c.join(", "));
      } else {
        let _0x203519 = _0x2ec4df?.["errorMessage"] || (_0x2ec4df ? JSON.stringify(_0x2ec4df) : "无返回");
        this.log("端午每周领券失败: " + _0x203519);
        (_0x203519?.["includes"]("系统繁忙") || _0x203519?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x5615db) {
      console.log(_0x5615db);
    }
  }
  async ["dragonBoat2024_taskList"](_0x255636 = {}) {
    try {
      let _0x48726b = {
          "fn": "dragonBoat2024_taskList",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          "headers": {
            ...this.getSign()
          },
          "json": {
            "activityCode": _0x49a488,
            "channelType": "MINI_PROGRAM"
          }
        },
        {
          result: _0x1535b2
        } = await this.request(_0x48726b);
      if (_0x1535b2?.["success"]) {
        let _0x1ec901 = _0x1535b2?.["obj"] || [];
        for (let _0x2fce84 of _0x1ec901.filter(_0x3ce0de => _0x3ce0de.status == 1)) {
          if (this.dragonBoat_black) return;
          for (let _0x1c8142 = 0; _0x1c8142 < _0x2fce84.canReceiveTokenNum; _0x1c8142++) {
            await this.dragonBoat2024_fetchMixTaskReward(_0x2fce84);
          }
        }
        for (let _0x335976 of _0x1ec901.filter(_0x531ac1 => _0x531ac1.status == 2)) {
          if (this.dragonBoat_black) return;
          switch (_0x335976.taskType) {
            case "PLAY_ACTIVITY_GAME":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x5d1bff = 0; _0x5d1bff < _0x335976.restFinishTime && !this.dragonBoat_black; _0x5d1bff++) {
                  await this.dragonBoat2024_finishTask(_0x335976);
                }
                break;
              }
          }
        }
      } else this.log("端午查询任务失败: " + (_0x1535b2?.["errorMessage"] || (_0x1535b2 ? JSON.stringify(_0x1535b2) : "无返回")));
    } catch (_0x4c6e62) {
      console.log(_0x4c6e62);
    }
  }
  async ["dragonBoat2024_finishTask"](_0x1e9da5, _0x9769bf = {}) {
    try {
      const _0x33afb1 = {
        "taskCode": _0x1e9da5.taskCode
      };
      let _0x705d56 = {
          "fn": "dragonBoat2024_finishTask",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          "headers": {
            ...this.getSign()
          },
          "json": _0x33afb1
        },
        {
          result: _0x7c549f
        } = await this.request(_0x705d56);
      _0x7c549f?.["success"] ? (this.log("端午完成任务[" + _0x1e9da5.taskName + "]成功"), await this.dragonBoat2024_fetchMixTaskReward(_0x1e9da5)) : this.log("端午完成任务[" + _0x1e9da5.taskName + "]失败: " + (_0x7c549f?.["errorMessage"] || (_0x7c549f ? JSON.stringify(_0x7c549f) : "无返回")));
    } catch (_0x7bebdb) {
      console.log(_0x7bebdb);
    }
  }
  ["dragonBoat2024_parse_item"](_0x30c58f) {
    let _0x2df87c = [];
    for (let _0x42f529 of _0x30c58f) {
      let _0x27fe5d = _0x42f529.currency,
        _0x35f9d2 = _0x2500ab[_0x27fe5d] || "[" + _0x27fe5d + "]",
        _0x1c332a = _0x42f529.balance || _0x42f529.amount || 0;
      const _0x40fb3f = {
        "currency": _0x27fe5d,
        "type": _0x35f9d2,
        "amount": _0x1c332a
      };
      _0x2df87c.push(_0x40fb3f);
    }
    return _0x2df87c;
  }
  async ["dragonBoat2024_fetchMixTaskReward"](_0x27e35f, _0x2e6166 = {}) {
    try {
      let _0xe78b0a = {
          "fn": "dragonBoat2024_fetchMixTaskReward",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024TaskService~fetchTasksReward",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x228c22
        } = await this.request(_0xe78b0a);
      if (_0x228c22?.["success"]) {
        let _0x54f9e9 = this.dragonBoat2024_parse_item(_0x228c22?.["obj"]?.["receivedAccountList"] || []);
        _0x54f9e9 = _0x54f9e9.map(_0x485337 => _0x485337.type + "x" + _0x485337.amount);
        this.log("端午领取任务[" + _0x27e35f.taskName + "]奖励: " + _0x54f9e9.join(", "));
      } else {
        let _0x4f4dda = _0x228c22?.["errorMessage"] || (_0x228c22 ? JSON.stringify(_0x228c22) : "无返回");
        this.log("端午领取任务[" + _0x27e35f.taskName + "]奖励失败: " + _0x4f4dda);
        _0x4f4dda?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x360fc4) {
      console.log(_0x360fc4);
    }
  }
  async ["dragonBoat2024_game_indexInfo"](_0x31ac33 = {}) {
    try {
      let _0x2ec17d = {
          "fn": "dragonBoat2024_game_indexInfo",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~indexInfo",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x17c002
        } = await this.request(_0x2ec17d);
      if (_0x17c002?.["success"]) {
        let _0x462b41 = _0x17c002?.["obj"]?.["ifPassAllLevel"];
        await this.dragonBoat2024_game_init(_0x462b41);
      } else {
        let _0x211180 = _0x17c002?.["errorMessage"] || (_0x17c002 ? JSON.stringify(_0x17c002) : "无返回");
        this.log("端午查询游戏状态失败: " + _0x211180);
        _0x211180?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x5a3c47) {
      console.log(_0x5a3c47);
    }
  }
  async ["dragonBoat2024_game_init"](_0x494284, _0x396812 = {}) {
    try {
      let _0x44929d = {
          "fn": "dragonBoat2024_game_init",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~init",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0x4f4e73
        } = await this.request(_0x44929d);
      if (_0x4f4e73?.["success"]) {
        let {
            gotPushTimeOfToday: _0x18a018,
            currentIndex: _0x286774
          } = _0x4f4e73?.["obj"],
          _0x319648 = 0;
        if (!_0x494284) _0x319648 = 30;else _0x18a018 < 3 && (_0x319648 = 3 * (3 - _0x18a018));
        if (_0x319648 > 0) {
          this.log("端午划龙舟, 目标: " + _0x319648 + "关");
          let _0x471cf3 = Math.min(_0x319648 + _0x286774, 30);
          for (let _0xf05b4 = _0x286774; _0xf05b4 <= _0x471cf3; _0xf05b4++) {
            let _0x4ca1 = Math.floor(Math.random() * 2000) + 2000;
            await _0x1366a8.wait(_0x4ca1);
            if (!(await this.dragonBoat2024_boat_win(_0xf05b4))) break;
          }
        }
      } else {
        let _0x2acdbf = _0x4f4e73?.["errorMessage"] || (_0x4f4e73 ? JSON.stringify(_0x4f4e73) : "无返回");
        this.log("端午查询游戏状态失败: " + _0x2acdbf);
        _0x2acdbf?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x4ae31b) {
      console.log(_0x4ae31b);
    }
  }
  async ["dragonBoat2024_boat_win"](_0x26f457 = 1, _0x2fdb26 = {}) {
    let _0xe568d6 = true;
    try {
      const _0xcbab14 = {
        "levelIndex": _0x26f457
      };
      let _0x1c0c69 = {
          "fn": "dragonBoat2024_boat_win",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~win",
          "headers": {
            ...this.getSign()
          },
          "json": _0xcbab14
        },
        {
          result: _0x1abfcb
        } = await this.request(_0x1c0c69);
      if (_0x1abfcb?.["success"]) {
        let _0x4a51b0 = this.dragonBoat2024_parse_item(_0x1abfcb?.["obj"]?.["currentAwardList"] || []);
        _0x4a51b0 = _0x4a51b0.map(_0x47b53e => _0x47b53e.type + "x" + _0x47b53e.amount);
        _0x4a51b0.length ? this.log("端午划龙舟第" + _0x26f457 + "关通关成功: " + _0x4a51b0.join(", ")) : this.log("端午划龙舟第" + _0x26f457 + "关通关成功");
      } else {
        let _0x108b45 = _0x1abfcb?.["errorMessage"] || (_0x1abfcb ? JSON.stringify(_0x1abfcb) : "无返回");
        this.log("端午划龙舟第" + _0x26f457 + "关失败: " + _0x108b45);
        _0x108b45?.["includes"]("系统繁忙") && (_0xe568d6 = false);
      }
    } catch (_0x5e3c5d) {
      console.log(_0x5e3c5d);
    } finally {
      return _0xe568d6;
    }
  }
  async ["dragonBoat2024_coinStatus"](_0x2aea89 = {}) {
    try {
      let _0x46988f = {
        "fn": "dragonBoat2024_coinStatus",
        "method": "post",
        "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~coinStatus",
        "headers": {
          ...this.getSign()
        },
        "json": {}
      };
      {
        let {
          result: _0x3e6121
        } = await this.request(_0x46988f);
        if (_0x3e6121?.["success"]) {
          let _0x274823 = _0x3e6121?.["obj"]?.["accountCurrencyList"] || [],
            _0x51bb5e = _0x274823.filter(_0x19afab => _0x19afab.currency == "PUSH_TIMES"),
            _0x431034 = _0x51bb5e?.[0]?.["balance"] || 0;
          this.log("端午可以推" + _0x431034 + "次金币");
          while (_0x431034-- > 0) {
            await this.dragonBoat2024_pushCoin();
          }
        } else this.log("端午查询推金币状态失败: " + (_0x3e6121?.["errorMessage"] || (_0x3e6121 ? JSON.stringify(_0x3e6121) : "无返回")));
      }
      {
        let {
          result: _0x24046b
        } = await this.request(_0x46988f);
        if (_0x24046b?.["success"]) {
          let {
              accountCurrencyList = [],
              pushedTimesToday: _0x285260,
              pushedTimesTotal: _0x1208d5
            } = _0x24046b?.["obj"],
            _0x47797a = this.dragonBoat2024_parse_item(accountCurrencyList),
            _0x1469b6 = _0x47797a.filter(_0x2dda7d => _0x2dda7d.currency == "COIN"),
            _0x1e1618 = _0x47797a.filter(_0x149fa7 => _0x149fa7.currency == "RICH_CARD_GAME");
          this.coin = _0x1469b6?.[0]?.["amount"] || 0;
          this.rich_card = _0x1e1618?.[0]?.["amount"] || 0;
          const _0x5e7291 = {
            "notify": true
          };
          this.log("端午金币: " + this.coin + ", 发财卡: " + this.rich_card, _0x5e7291);
          let _0x4053cf = Math.floor(this.coin / 230),
            _0x35ef0f = Math.min(_0x4053cf, this.rich_card);
          this.log("端午可以抽发财卡池" + _0x35ef0f + "次");
          while (_0x35ef0f-- > 0) {
            await this.dragonBoat2024_prizeDraw(4);
          }
        } else this.log("端午查询金币失败: " + (_0x24046b?.["errorMessage"] || (_0x24046b ? JSON.stringify(_0x24046b) : "无返回")));
      }
    } catch (_0xb8215a) {
      console.log(_0xb8215a);
    }
  }
  async ["dragonBoat2024_givePushTimes"](_0x44a3a8 = {}) {
    let _0x51e0f5 = true;
    try {
      let _0x300d2b = {
        "fn": "dragonBoat2024_givePushTimes",
        "method": "post",
        "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~givePushTimes",
        "headers": {
          ...this.getSign()
        },
        "json": {}
      };
      await this.request(_0x300d2b);
    } catch (_0x152921) {
      console.log(_0x152921);
    } finally {
      return _0x51e0f5;
    }
  }
  async ["dragonBoat2024_pushCoin"](_0x2ab8e6 = {}) {
    try {
      const _0x4e0923 = {
        "plateToken": null
      };
      let _0x1ede14 = {
          "fn": "dragonBoat2024_pushCoin",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~pushCoin",
          "headers": {
            ...this.getSign()
          },
          "json": _0x4e0923
        },
        {
          result: _0x1cdbd0
        } = await this.request(_0x1ede14);
      if (_0x1cdbd0?.["success"]) {
        let _0x164587 = this.dragonBoat2024_parse_item(_0x1cdbd0?.["obj"]?.["receivedAccountList"] || []);
        _0x164587 = _0x164587.map(_0x397b96 => _0x397b96.type + "x" + _0x397b96.amount);
        _0x164587.length ? this.log("端午推金币成功: " + _0x164587.join(", ")) : this.log("端午推金币成功, 没有获得奖品");
      } else this.log("端午推金币失败: " + (_0x1cdbd0?.["errorMessage"] || (_0x1cdbd0 ? JSON.stringify(_0x1cdbd0) : "无返回")));
    } catch (_0x372bd6) {
      console.log(_0x372bd6);
    }
  }
  async ["dragonBoat2024_coinStatus_checkDraw"](_0xe1b877 = {}) {
    try {
      let _0x580f86 = {
          "fn": "dragonBoat2024_coinStatus",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~coinStatus",
          "headers": {
            ...this.getSign()
          },
          "json": {}
        },
        {
          result: _0xae587b
        } = await this.request(_0x580f86);
      if (_0xae587b?.["success"]) {
        let {
            accountCurrencyList = [],
            pushedTimesToday: _0x512f9a,
            pushedTimesTotal: _0x35be49
          } = _0xae587b?.["obj"],
          _0x1e5667 = this.dragonBoat2024_parse_item(accountCurrencyList),
          _0x1f3562 = _0x1e5667.filter(_0x4e3ceb => _0x4e3ceb.currency == "COIN"),
          _0x1aa220 = _0x1e5667.filter(_0x48245c => _0x48245c.currency == "RICH_CARD_GAME");
        this.coin = _0x1f3562?.[0]?.["amount"] || 0;
        this.rich_card = _0x1aa220?.[0]?.["amount"] || 0;
        const _0x7b773 = {
          "notify": true
        };
        this.log("端午金币: " + this.coin + ", 发财卡: " + this.rich_card, _0x7b773);
        let _0x580ccc = Math.floor(this.coin / 230),
          _0x2dc44c = Math.min(_0x580ccc, this.rich_card);
        this.log("端午可以抽发财卡池" + _0x2dc44c + "次");
        while (_0x2dc44c-- > 0) {
          if (await this.dragonBoat2024_prizeDraw(4)) this.coin -= 230;else break;
        }
        const _0x333559 = {
            "idx": 3,
            "coin": 200
          },
          _0x5df20e = {
            "idx": 2,
            "coin": 150
          },
          _0x44b22c = {
            "idx": 1,
            "coin": 30
          },
          _0x716981 = [_0x333559, _0x5df20e, _0x44b22c];
        for (let _0x29e779 of _0x716981) {
          while (this.coin >= _0x29e779.coin) {
            if (await this.dragonBoat2024_prizeDraw(_0x29e779.idx)) this.coin -= _0x29e779.coin;else break;
          }
        }
      } else this.log("端午查询金币失败: " + (_0xae587b?.["errorMessage"] || (_0xae587b ? JSON.stringify(_0xae587b) : "无返回")));
    } catch (_0x2cfd66) {
      console.log(_0x2cfd66);
    }
  }
  async ["dragonBoat2024_prizeDraw"](_0x313ef0, _0x12593a = {}) {
    let _0x2744b7 = false;
    try {
      const _0x2ece22 = {
        "drawType": _0x313ef0
      };
      let _0x5c8608 = {
          "fn": "dragonBoat2024_prizeDraw",
          "method": "post",
          "url": "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024LotteryService~prizeDraw",
          "headers": {
            ...this.getSign()
          },
          "json": _0x2ece22
        },
        {
          result: _0x3a86da
        } = await this.request(_0x5c8608);
      if (_0x3a86da?.["success"]) {
        _0x2744b7 = true;
        let {
          giftBagName = "",
          giftBagDesc = ""
        } = _0x3a86da?.["obj"];
        const _0x3fd5b8 = {
          "notify": true
        };
        this.log("端午奖池[" + _0x313ef0 + "]抽奖: [" + giftBagName + "]" + giftBagDesc, _0x3fd5b8);
      } else this.log("端午奖池[" + _0x313ef0 + "]抽奖失败: " + (_0x3a86da?.["errorMessage"] || (_0x3a86da ? JSON.stringify(_0x3a86da) : "无返回")));
    } catch (_0xf69c72) {
      console.log(_0xf69c72);
    } finally {
      return _0x2744b7;
    }
  }
  async ["anniversary2024_task"](_0x3743b9 = {}) {
    await this.anniversary2024_weeklyGiftStatus();
    if (this.anniversary_black) return;
    await this.anniversary2024_game_list();
    await this.anniversary2024_taskList();
    await this.anniversary2024_queryAccountStatus();
  }
  async ["anniversary2024_draw_task"](_0x10adf5 = {}) {
    let _0x33cb3c = Date.now();
    if (_0x33cb3c < 1716516000000 || _0x33cb3c > 1718812800000) return;
    await this.dragonBoat2024_coinStatus_checkDraw();
  }
  async ["dragonBoat2024_task"](_0xbba883 = {}) {
    let _0x544f87 = Date.now();
    if (_0x544f87 < 1716516000000 || _0x544f87 > 1718190000000) return;
    await this.dragonBoat2024_weeklyGiftStatus();
    if (this.dragonBoat_black) return;
    await this.dragonBoat2024_game_indexInfo();
    await this.dragonBoat2024_taskList();
    await this.dragonBoat2024_givePushTimes();
    await this.dragonBoat2024_coinStatus();
  }
  async ["dragonBoat2024_draw_task"](_0x35f85f = {}) {
    await this.anniversary2024_queryAccountStatus_card();
  }
  async ["memberDay_task"](_0x3d0ce3 = {}) {
    let _0x2a9552 = new Date().getDate();
    _0x2a9552 >= 26 && _0x2a9552 <= 28 && (await this.memberDay_index());
  }
  async ["userTask"](_0x11e841 = {}) {
    _0x1366a8.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.refresh_cookie())) {
      return;
    }
    await this.superWelfare_receiveRedPacket();
    await this.automaticSignFetchPackage();
    _0x94f81d == "true" && (await this.bee_indexData());
    await this.memberDay_task();
    _0x3bec27 == "true" && (await this.anniversary2024_draw_task());
    await this.coupon_list();
  }
}
!(async () => {
  _0x1366a8.read_env(_0x520715);
  let _0x237de2 = _0x94f81d == "true" ? "运行" : "不运行";
  _0x1366a8.log("");
  const _0x4fd713 = {
    "notify": true
  };
  _0x1366a8.log("采蜜游戏目前设置为: " + _0x237de2, _0x4fd713);
  _0x1366a8.log("");
  for (let _0x5a57a0 of _0x1366a8.userList) {
    await _0x5a57a0.userTask();
  }
})().catch(_0x6db416 => _0x1366a8.log(_0x6db416)).finally(() => _0x1366a8.exitNow());
async function _0x1325bb(_0x39257e = 0) {
  let _0x29485a = false;
  try {
    const _0x4a26e3 = {
      "fn": "auth",
      "method": "get",
      "url": _0x1e5430,
      "timeout": 20000
    };
    let {
      statusCode: _0x4a3293,
      result: _0x1e4a81
    } = await _0xd9af8d.request(_0x4a26e3);
    if (_0x4a3293 != 200) return _0x39257e++ < _0x4da51e && (_0x29485a = await _0x1325bb(_0x39257e)), _0x29485a;
    if (_0x1e4a81?.["code"] == 0) {
      _0x1e4a81 = JSON.parse(_0x1e4a81.data.file.data);
      if (_0x1e4a81?.["commonNotify"] && _0x1e4a81.commonNotify.length > 0) {
        const _0x43ad89 = {
          "notify": true
        };
        _0x1366a8.log(_0x1e4a81.commonNotify.join("\n") + "\n", _0x43ad89);
      }
      _0x1e4a81?.["commonMsg"] && _0x1e4a81.commonMsg.length > 0 && _0x1366a8.log(_0x1e4a81.commonMsg.join("\n") + "\n");
      if (_0x1e4a81[_0x16c88c]) {
        let _0x2d1a9f = _0x1e4a81[_0x16c88c];
        _0x2d1a9f.status == 0 ? _0x30f72a >= _0x2d1a9f.version ? (_0x29485a = true, _0x1366a8.log(_0x2d1a9f.msg[_0x2d1a9f.status]), _0x1366a8.log(_0x2d1a9f.updateMsg), _0x1366a8.log("现在运行的脚本版本是：" + _0x30f72a + "，最新脚本版本：" + _0x2d1a9f.latestVersion)) : _0x1366a8.log(_0x2d1a9f.versionMsg) : _0x1366a8.log(_0x2d1a9f.msg[_0x2d1a9f.status]);
      } else _0x1366a8.log(_0x1e4a81.errorMsg);
    } else _0x39257e++ < _0x4da51e && (_0x29485a = await _0x1325bb(_0x39257e));
  } catch (_0x500dab) {
    _0x1366a8.log(_0x500dab);
  } finally {
    return _0x29485a;
  }
}
async function _0x1a0bdc() {
  let _0x4c38a9 = false;
  try {
    const _0x1eadb6 = {
      "fn": "auth",
      "method": "get",
      "url": _0x5c6146
    };
    let {
      statusCode: _0x4afd12,
      result: _0x5031f4
    } = await _0xd9af8d.request(_0x1eadb6);
    if (_0x4afd12 != 200) return Promise.resolve();
    _0x5031f4?.["code"] == 0 && (_0x5031f4 = JSON.parse(_0x5031f4.data.file.data), _0x11aa2a = _0x5031f4?.["inviteUserId"] || _0x11aa2a, _0x479306 = _0x5031f4?.["anniversary_2024"] || _0x479306);
  } catch (_0x405245) {
    _0x1366a8.log(_0x405245);
  } finally {
    return _0x4c38a9;
  }
}
function _0x1c156a(_0x5097d5) {
  return new class {
    constructor(_0x5208b8) {
      this.name = _0x5208b8;
      this.startTime = Date.now();
      const _0x482c15 = {
        "time": true
      };
      this.log("[" + this.name + "]开始运行\n", _0x482c15);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    ["log"](_0x3ad5a6, _0x937fd8 = {}) {
      const _0x4451ce = {
        "console": true
      };
      Object.assign(_0x4451ce, _0x937fd8);
      if (_0x4451ce.time) {
        let _0x4a1aea = _0x4451ce.fmt || "hh:mm:ss";
        _0x3ad5a6 = "[" + this.time(_0x4a1aea) + "]" + _0x3ad5a6;
      }
      _0x4451ce.notify && this.notifyStr.push(_0x3ad5a6);
      _0x4451ce.console && console.log(_0x3ad5a6);
    }
    ["get"](_0x69caf3, _0x457c63, _0x37a524 = "") {
      let _0x7b4ee3 = _0x37a524;
      return _0x69caf3?.["hasOwnProperty"](_0x457c63) && (_0x7b4ee3 = _0x69caf3[_0x457c63]), _0x7b4ee3;
    }
    ["pop"](_0x387de8, _0x5a78c6, _0x2d2e0a = "") {
      let _0x1fbab8 = _0x2d2e0a;
      return _0x387de8?.["hasOwnProperty"](_0x5a78c6) && (_0x1fbab8 = _0x387de8[_0x5a78c6], delete _0x387de8[_0x5a78c6]), _0x1fbab8;
    }
    ["copy"](_0x1142e5) {
      return Object.assign({}, _0x1142e5);
    }
    ["read_env"](_0x4d76c3) {
      let _0x401749 = _0x12e0b9.map(_0x5cd729 => process.env[_0x5cd729]);
      for (let _0x4a15d3 of _0x401749.filter(_0x349d4e => !!_0x349d4e)) {
        for (let _0x5b4c1d of _0x4a15d3.split(_0x371509).filter(_0x506c72 => !!_0x506c72)) {
          if (this.userList.includes(_0x5b4c1d)) continue;
          this.userList.push(new _0x4d76c3(_0x5b4c1d));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x21f6ac = {
          "notify": true
        };
        return this.log("未找到变量，请检查变量" + _0x12e0b9.map(_0x1ced31 => "[" + _0x1ced31 + "]").join("或"), _0x21f6ac), false;
      }
      return this.log("共找到" + this.userCount + "个账号"), true;
    }
    async ["threads"](_0x96c6e0, _0x114ef6, _0x59a175 = {}) {
      while (_0x114ef6.idx < _0x1366a8.userList.length) {
        let _0x156a87 = _0x1366a8.userList[_0x114ef6.idx++];
        if (!_0x156a87.valid) continue;
        await _0x156a87[_0x96c6e0](_0x59a175);
      }
    }
    async ["threadTask"](_0xa0b6af, _0xe375c0) {
      let _0x4414a8 = [];
      const _0x1ee09e = {
        "idx": 0
      };
      while (_0xe375c0--) {
        _0x4414a8.push(this.threads(_0xa0b6af, _0x1ee09e));
      }
      await Promise.all(_0x4414a8);
    }
    ["time"](_0x85b014, _0x1eff81 = null) {
      let _0x2b45ac = _0x1eff81 ? new Date(_0x1eff81) : new Date(),
        _0x43a756 = {
          "M+": _0x2b45ac.getMonth() + 1,
          "d+": _0x2b45ac.getDate(),
          "h+": _0x2b45ac.getHours(),
          "m+": _0x2b45ac.getMinutes(),
          "s+": _0x2b45ac.getSeconds(),
          "q+": Math.floor((_0x2b45ac.getMonth() + 3) / 3),
          "S": this.padStr(_0x2b45ac.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x85b014) && (_0x85b014 = _0x85b014.replace(RegExp.$1, (_0x2b45ac.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x54f11e in _0x43a756) new RegExp("(" + _0x54f11e + ")").test(_0x85b014) && (_0x85b014 = _0x85b014.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x43a756[_0x54f11e] : ("00" + _0x43a756[_0x54f11e]).substr(("" + _0x43a756[_0x54f11e]).length)));
      return _0x85b014;
    }
    async ["showmsg"]() {
      if (!this.notifyFlag) return;
      if (!this.notifyStr.length) return;
      var _0x2b26ef = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x2b26ef.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    ["padStr"](_0x4eed23, _0x20fa72, _0x365ba1 = {}) {
      let _0x411f55 = _0x365ba1.padding || "0",
        _0x4f1c38 = _0x365ba1.mode || "l",
        _0x5671c7 = String(_0x4eed23),
        _0x418bc4 = _0x20fa72 > _0x5671c7.length ? _0x20fa72 - _0x5671c7.length : 0,
        _0x1512a7 = "";
      for (let _0x5856c1 = 0; _0x5856c1 < _0x418bc4; _0x5856c1++) {
        _0x1512a7 += _0x411f55;
      }
      return _0x4f1c38 == "r" ? _0x5671c7 = _0x5671c7 + _0x1512a7 : _0x5671c7 = _0x1512a7 + _0x5671c7, _0x5671c7;
    }
    ["json2str"](_0x57cf9f, _0x10dc6e, _0x193bc = false) {
      let _0x17850e = [];
      for (let _0x1f1018 of Object.keys(_0x57cf9f).sort()) {
        let _0x42ad0e = _0x57cf9f[_0x1f1018];
        _0x42ad0e && _0x193bc && (_0x42ad0e = encodeURIComponent(_0x42ad0e));
        _0x17850e.push(_0x1f1018 + "=" + _0x42ad0e);
      }
      return _0x17850e.join(_0x10dc6e);
    }
    ["str2json"](_0x1b5d5c, _0x38d2a5 = false) {
      let _0x11ab68 = {};
      for (let _0x4ddcad of _0x1b5d5c.split("&")) {
        if (!_0x4ddcad) {
          continue;
        }
        let _0x447e88 = _0x4ddcad.indexOf("=");
        if (_0x447e88 == -1) continue;
        let _0x43c6b3 = _0x4ddcad.substr(0, _0x447e88),
          _0x476499 = _0x4ddcad.substr(_0x447e88 + 1);
        _0x38d2a5 && (_0x476499 = decodeURIComponent(_0x476499));
        _0x11ab68[_0x43c6b3] = _0x476499;
      }
      return _0x11ab68;
    }
    ["randomPattern"](_0x17c73f, _0x57d45f = "abcdef0123456789") {
      let _0x48fe51 = "";
      for (let _0x22664e of _0x17c73f) {
        _0x22664e == "x" ? _0x48fe51 += _0x57d45f.charAt(Math.floor(Math.random() * _0x57d45f.length)) : _0x22664e == "X" ? _0x48fe51 += _0x57d45f.charAt(Math.floor(Math.random() * _0x57d45f.length)).toUpperCase() : _0x48fe51 += _0x22664e;
      }
      return _0x48fe51;
    }
    ["randomUuid"]() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    ["randomString"](_0x365ec9, _0x3aa8b9 = "abcdef0123456789") {
      let _0x4d534d = "";
      for (let _0x22e065 = 0; _0x22e065 < _0x365ec9; _0x22e065++) {
        _0x4d534d += _0x3aa8b9.charAt(Math.floor(Math.random() * _0x3aa8b9.length));
      }
      return _0x4d534d;
    }
    ["randomList"](_0x29787e) {
      if (!_0x29787e.length) return null;
      let _0x5aa734 = Math.floor(Math.random() * _0x29787e.length);
      return _0x29787e[_0x5aa734];
    }
    ["wait"](_0x8c4c4f) {
      return new Promise(_0x28ceec => setTimeout(_0x28ceec, 1500));
    }
    async ["exitNow"]() {
      await this.showmsg();
      let _0x501ca3 = Date.now(),
        _0x317526 = (_0x501ca3 - this.startTime) / 1000;
      this.log("");
      const _0xc34292 = {
        "time": true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x317526 + "秒", _0xc34292);
      console.log("By 老表呆瓜 (https://jdche.cf)为您服务!");
      process.exit(0);
    }
    ["normalize_time"](_0x28b87b, _0x5b2748 = {}) {
      let _0x283c68 = _0x5b2748.len || this.default_timestamp_len;
      _0x28b87b = _0x28b87b.toString();
      let _0x1ef935 = _0x28b87b.length;
      while (_0x1ef935 < _0x283c68) {
        _0x28b87b += "0";
      }
      return _0x1ef935 > _0x283c68 && (_0x28b87b = _0x28b87b.slice(0, 13)), parseInt(_0x28b87b);
    }
    async ["wait_until"](_0x5a32df, _0x50385c = {}) {
      let _0x5ea15a = _0x50385c.logger || this,
        _0x129a57 = _0x50385c.interval || this.default_wait_interval,
        _0x51c910 = _0x50385c.limit || this.default_wait_limit,
        _0x19657f = _0x50385c.ahead || this.default_wait_ahead;
      if (typeof _0x5a32df == "string" && _0x5a32df.includes(":")) {
        if (_0x5a32df.includes("-")) _0x5a32df = new Date(_0x5a32df).getTime();else {
          let _0x5d1cdd = this.time("yyyy-MM-dd ");
          _0x5a32df = new Date(_0x5d1cdd + _0x5a32df).getTime();
        }
      }
      let _0x3ac9d = this.normalize_time(_0x5a32df) - _0x19657f,
        _0x62cca3 = this.time("hh:mm:ss.S", _0x3ac9d),
        _0x11a7b1 = Date.now();
      _0x11a7b1 > _0x3ac9d && (_0x3ac9d += 86400000);
      let _0xbbf1fb = _0x3ac9d - _0x11a7b1;
      if (_0xbbf1fb > _0x51c910) {
        const _0x3d1473 = {
          "time": true
        };
        _0x5ea15a.log("离目标时间[" + _0x62cca3 + "]大于" + _0x51c910 / 1000 + "秒,不等待", _0x3d1473);
      } else {
        const _0x1cf20d = {
          "time": true
        };
        _0x5ea15a.log("离目标时间[" + _0x62cca3 + "]还有" + _0xbbf1fb / 1000 + "秒,开始等待", _0x1cf20d);
        while (_0xbbf1fb > 0) {
          let _0x1b89a6 = Math.min(_0xbbf1fb, _0x129a57);
          await this.wait(_0x1b89a6);
          _0x11a7b1 = Date.now();
          _0xbbf1fb = _0x3ac9d - _0x11a7b1;
        }
        const _0x536482 = {
          "time": true
        };
        _0x5ea15a.log("已完成等待", _0x536482);
      }
    }
    async ["wait_gap_interval"](_0x208d57, _0x23969b) {
      let _0x2c865c = Date.now() - _0x208d57;
      _0x2c865c < _0x23969b && (await this.wait(_0x23969b - _0x2c865c));
    }
  }(_0x5097d5);
}