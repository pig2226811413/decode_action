const USER_AGENTS = ["iPad;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/0;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/1436;psn/BS6Y9SAiw0IpJ4ro7rjSOkCRZTgR3z2K|10;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/10.5;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.1;59d6ae6e8387bd09fe046d5b8918ead51614e80a;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.26;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/59d6ae6e8387bd09fe046d5b8918ead51614e80a|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;22d679c006bf9c087abf362cf1d2e0020ebb8798;network/wifi;ADID/10857A57-DDF8-4A0D-A548-7B8F43AC77EE;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,1;addressid/2378947694;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/15.7;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/6;ads/;psn/22d679c006bf9c087abf362cf1d2e0020ebb8798|22;jdv/0|kong|t_1000170135|tuiguang|notset|1614153044558|1614153044;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2616935633265383-5333463636261326;network/UNKNOWN;model/M2007J3SC;addressid/1840745247;aid/ba9e3b5853dccb1b;oaid/371d8af7dd71e8d5;osVer/29;appBuild/1436;psn/t7JmxZUXGkimd4f9Jdul2jEeuYLwxPrm|8;psq/6;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.6;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; M2007J3SC Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.3;d7beab54ae7758fa896c193b49470204fbb8fce9;network/4g;ADID/97AD46C9-6D49-4642-BF6F-689256673906;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5;network/wifi;ADID/5603541B-30C1-4B5C-A782-20D0B569D810;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/1041002757;hasOCPay/0;appBuild/101;supportBestPay/0;pv/34.6;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5|44;jdv/0|androidapp|t_335139774|appshare|CopyURL|1612612940307|1612612944;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;21631ed983b3e854a3154b0336413825ad0d6783;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;500a795cb2abae60b877ee4a1930557a800bef1c;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;f5e7b7980fb50efc9c294ac38653c1584846c3db;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;19fef5419f88076c43f5317eabe20121d52c6a61;network/wifi;ADID/00000000-0000-0000-0000-000000000000;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/3430850943;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.4;apprpd/;ref/JDLTSubMainPageViewController;psq/3;ads/;psn/19fef5419f88076c43f5317eabe20121d52c6a61|16;jdv/0|kong|t_1001327829_|jingfen|f51febe09dd64b20b06bc6ef4c1ad790#/|1614096460311|1614096511;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;12.2;f995bc883282f7c7ea9d7f32da3f658127aa36c7;network/4g;ADID/9F40F4CA-EA7C-4F2E-8E09-97A66901D83E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,4;addressid/525064695;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/11.11;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/f995bc883282f7c7ea9d7f32da3f658127aa36c7|22;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 12.2;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;5366566313931326-6633931643233693;network/wifi;model/Mi9 Pro 5G;addressid/0;aid/5fe6191bf39a42c9;oaid/e3a9473ef6699f75;osVer/29;appBuild/1436;psn/b3rJlGi AwLqa9AqX7Vp0jv4T7XPMa0o|5;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; Mi9 Pro 5G Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/666624049;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/54.11;apprpd/MessageCenter_MessageMerge;ref/MessageCenterController;psq/10;ads/;psn/4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1|101;jdv/0|kong|t_2010804675_|jingfen|810dab1ba2c04b8588c5aa5a0d44c4bd|1614183499;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.2;c71b599e9a0bcbd8d1ad924d85b5715530efad06;network/wifi;ADID/751C6E92-FD10-4323-B37C-187FD0CF0551;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/4053561885;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/263.8;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/c71b599e9a0bcbd8d1ad924d85b5715530efad06|481;jdv/0|kong|t_1001610202_|jingfen|3911bea7ee2f4fcf8d11fdf663192bbe|1614157052210|1614157056;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;2d306ee3cacd2c02560627a5113817ebea20a2c9;network/4g;ADID/A346F099-3182-4889-9A62-2B3C28AB861E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.35;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/0;ads/;psn/2d306ee3cacd2c02560627a5113817ebea20a2c9|2;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;28355aff16cec8bcf3e5728dbbc9725656d8c2c2;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/833058617;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.10;apprpd/;ref/JDLTWebViewController;psq/9;ads/;psn/28355aff16cec8bcf3e5728dbbc9725656d8c2c2|5;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;24ddac73a3de1b91816b7aedef53e97c4c313733;network/4g;ADID/598C6841-76AC-4512-AA97-CBA940548D70;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone11,6;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/12.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/24ddac73a3de1b91816b7aedef53e97c4c313733|23;jdv/0|kong|t_1000170135|tuiguang|notset|1614126110904|1614126110;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/25239372;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/8.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b|14;jdv/0|kong|t_1001226363_|jingfen|5713234d1e1e4893b92b2de2cb32484d|1614182989528|1614182992;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;ca1a32afca36bc9fb37fd03f18e653bce53eaca5;network/wifi;ADID/3AF380AB-CB74-4FE6-9E7C-967693863CA3;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone8,1;addressid/138323416;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/72.12;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/ca1a32afca36bc9fb37fd03f18e653bce53eaca5|109;jdv/0|kong|t_1000536212_|jingfen|c82bfa19e33a4269a5884ffc614790f4|1614141246;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;7346933333666353-8333366646039373;network/wifi;model/ONEPLUS A5010;addressid/138117973;aid/7d933f6583cfd097;oaid/;osVer/29;appBuild/1436;psn/T/eqfRSwp8VKEvvXyEunq09Cg2MUkiQ5|17;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/11.4;jdv/0|kong|t_1001849073_|jingfen|495a47f6c0b8431c9d460f61ad2304dc|1614084403978|1614084407;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;11;4626269356736353-5353236346334673;network/wifi;model/M2006J10C;addressid/0;aid/dbb9e7655526d3d7;oaid/66a7af49362987b0;osVer/30;appBuild/1436;psn/rQRQgJ 4 S3qkq8YDl28y6jkUHmI/rlX|3;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/3.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 11; M2006J10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "iPhone;3.7.0;14.4;78fc1d919de0c8c2de15725eff508d8ab14f9c82;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,1;addressid/137829713;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/23.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/78fc1d919de0c8c2de15725eff508d8ab14f9c82|34;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1612508702380|1612534293;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;0373263343266633-5663030363465326;network/wifi;model/Redmi Note 7;addressid/590846082;aid/07b34bf3e6006d5b;oaid/17975a142e67ec92;osVer/29;appBuild/1436;psn/OHNqtdhQKv1okyh7rB3HxjwI00ixJMNG|4;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.3;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "android;3.7.0;10;3636566623663623-1693635613166646;network/wifi;model/ASUS_I001DA;addressid/1397761133;aid/ccef2fc2a96e1afd;oaid/;osVer/29;appBuild/1436;psn/T8087T0D82PHzJ4VUMGFrfB9dw4gUnKG|76;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/73.5;jdv/0|kong|t_1002354188_|jingfen|2335e043b3344107a2750a781fde9a2e#/|1614097081426|1614097087;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/yingyongbao;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ASUS_I001DA Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/138419019;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.7;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/6;ads/;psn/4ee6af0db48fd605adb69b63f00fcbb51c2fc3f0|9;jdv/0|direct|-|none|-|1613705981655|1613823229;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/F9FD7728-2956-4DD1-8EDD-58B07950864C;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;ADID/5D306F0D-A131-4B26-947E-166CCB9BFFFF;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad8,9;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.20;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/d9f5ddaa0160a20f32fb2c8bfd174fae7993c1b4|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.5;Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/31548A9C-8A01-469A-B148-E7D841C91FD0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.5;apprpd/;ref/JDLTSubMainPageViewController;psq/4;ads/;psn/a858fb4b40e432ea32f80729916e6c3e910bb922|12;jdv/0|direct|-|none|-|1613898710373|1613898712;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;3346332626262353-1666434336539336;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;8363834353530333132333132373-43D2930366035323639333662383;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;1343467336264693-3343562673463613;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;8353636393732346-6646931673935346;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;6d343c58764a908d4fa56609da4cb3a5cc1396d3;network/wifi;ADID/4965D884-3E61-4C4E-AEA7-9A8CE3742DA7;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.6.1;4606ddccdfe8f343f8137de7fea7f91fc4aef3a3;network/4g;ADID/C6FB6E20-D334-45FA-818A-7A4C58305202;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone10,1;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/4606ddccdfe8f343f8137de7fea7f91fc4aef3a3|5;jdv/0|iosapp|t_335139774|liteshare|Qqfriends|1614206359106|1614206366;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;3b6e79334551fc6f31952d338b996789d157c4e8;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/138051400;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/14.34;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/12;ads/;psn/3b6e79334551fc6f31952d338b996789d157c4e8|46;jdv/0|kong|t_1001707023_|jingfen|e80d7173a4264f4c9a3addcac7da8b5d|1613837384708|1613858760;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;1346235693831363-2373837393932673;network/wifi;model/LYA-AL00;addressid/3321567203;aid/1d2e9816278799b7;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/1436;psn/45VUZFTZJkhP5fAXbeBoQ0   O2GCB I|7;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.8;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1614066210320|1614066219;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/huawei;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36", "iPhone;3.7.0;14.3;c2a8854e622a1b17a6c56c789f832f9d78ef1ba7;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/c2a8854e622a1b17a6c56c789f832f9d78ef1ba7|6;jdv/0|direct|-|none|-|1613541016735|1613823566;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;;network/wifi;model/MIX 2S;addressid/;aid/f87efed6d9ed3c65;oaid/94739128ef9dd245;osVer/28;appBuild/1436;psn/R7wD/OWkQjYWxax1pDV6kTIDFPJCUid7C/nl2hHnUuI=|3;psq/13;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/1.42;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2S Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/3g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/2813715704;pv/67.38;apprpd/MyJD_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F2ynE8QDtc2svd36VowmYWBzzDdK6%2Findex.html%3Flng%3D103.957532%26lat%3D30.626962%26sid%3D4fe8ef4283b24723a7bb30ee87c18b2w%26un_area%3D22_1930_49324_52512;psq/4;ads/;psn/5aef178f95931bdbbde849ea9e2fc62b18bc5829|127;jdv/0|direct|-|none|-|1612588090667|1613822580;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/3104834020;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/c633e62b5a4ad0fdd93d9862bdcacfa8f3ecef63|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,4;addressid/1477231693;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/21.15;apprpd/MyJD_Main;ref/https%3A%2F%2Fgold.jd.com%2F%3Flng%3D0.000000%26lat%3D0.000000%26sid%3D4584eb84dc00141b0d58e000583a338w%26un_area%3D19_1607_3155_62114;psq/0;ads/;psn/2c822e59db319590266cc83b78c4a943783d0077|46;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/3.49;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/7;ads/;psn/9e0e0ea9c6801dfd53f2e50ffaa7f84c7b40cd15|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad7,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.14;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/3;ads/;psn/956c074c769cd2eeab2e36fca24ad4c9e469751a|8;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"];
const http = require("http"),
  request = require("request"),
  {
    sendNotify
  } = require("./sendNotify1.js");
var exec = require("child_process").exec;
const CHECK_BASE_URL = process.env.HOST || "http://card.94wan.fun:8282",
  NET_ERROR_TIP = "网络异常，跳过";
function randomNumber(_0x46fb6e = 0, _0x1decd0 = 100) {
  return Math.min(Math.floor(_0x46fb6e + Math.random() * (_0x1decd0 - _0x46fb6e)), _0x1decd0);
}
const User_Agent = USER_AGENTS[randomNumber(0, USER_AGENTS.length - 1)],
  sign = _0x452b77 => {
    function _0x389091(_0x2530f1, _0x47cb47) {
      return _0x2530f1 << _0x47cb47 | _0x2530f1 >>> 32 - _0x47cb47;
    }
    function _0xfec9e1(_0x489495, _0x191519) {
      var _0x2a3788, _0x420581, _0x3c3ece, _0x4bc76f, _0x13b2c6;
      _0x3c3ece = 2147483648 & _0x489495;
      _0x4bc76f = 2147483648 & _0x191519;
      _0x13b2c6 = (1073741823 & _0x489495) + (1073741823 & _0x191519);
      return (_0x2a3788 = 1073741824 & _0x489495) & (_0x420581 = 1073741824 & _0x191519) ? 2147483648 ^ _0x13b2c6 ^ _0x3c3ece ^ _0x4bc76f : _0x2a3788 | _0x420581 ? 1073741824 & _0x13b2c6 ? 3221225472 ^ _0x13b2c6 ^ _0x3c3ece ^ _0x4bc76f : 1073741824 ^ _0x13b2c6 ^ _0x3c3ece ^ _0x4bc76f : _0x13b2c6 ^ _0x3c3ece ^ _0x4bc76f;
    }
    function _0x45bd0b(_0x3c16da, _0x457a18, _0x2d6b26, _0x2ebf4e, _0x22290b, _0x7862b0, _0x252d2b) {
      _0x3c16da = _0xfec9e1(_0x3c16da, _0xfec9e1(_0xfec9e1(function (_0x1414dd, _0x4c4731, _0x3a687b) {
        return _0x1414dd & _0x4c4731 | ~_0x1414dd & _0x3a687b;
      }(_0x457a18, _0x2d6b26, _0x2ebf4e), _0x22290b), _0x252d2b));
      return _0xfec9e1(_0x389091(_0x3c16da, _0x7862b0), _0x457a18);
    }
    function _0x425cee(_0x36356d, _0x162468, _0x53e2e8, _0x413d3d, _0x1ebf88, _0x46974c, _0x51f654) {
      _0x36356d = _0xfec9e1(_0x36356d, _0xfec9e1(_0xfec9e1(function (_0x16cad3, _0x3cc0fb, _0x3b9312) {
        return _0x16cad3 & _0x3b9312 | _0x3cc0fb & ~_0x3b9312;
      }(_0x162468, _0x53e2e8, _0x413d3d), _0x1ebf88), _0x51f654));
      return _0xfec9e1(_0x389091(_0x36356d, _0x46974c), _0x162468);
    }
    function _0xad518b(_0x3e0d14, _0x23d896, _0x30ff10, _0x44dc46, _0x2a130c, _0x1f7c7c, _0x1c6889) {
      _0x3e0d14 = _0xfec9e1(_0x3e0d14, _0xfec9e1(_0xfec9e1(function (_0x161858, _0x167f43, _0x5d14c3) {
        return _0x161858 ^ _0x167f43 ^ _0x5d14c3;
      }(_0x23d896, _0x30ff10, _0x44dc46), _0x2a130c), _0x1c6889));
      return _0xfec9e1(_0x389091(_0x3e0d14, _0x1f7c7c), _0x23d896);
    }
    function _0x2bc460(_0x595790, _0x107258, _0x131bc0, _0x1d17e1, _0x2d4f3d, _0x1520a6, _0x147178) {
      _0x595790 = _0xfec9e1(_0x595790, _0xfec9e1(_0xfec9e1(function (_0x14724e, _0x6512dd, _0x47f05f) {
        return _0x6512dd ^ (_0x14724e | ~_0x47f05f);
      }(_0x107258, _0x131bc0, _0x1d17e1), _0x2d4f3d), _0x147178));
      return _0xfec9e1(_0x389091(_0x595790, _0x1520a6), _0x107258);
    }
    function _0x238ee8(_0x11ba14) {
      var _0x50b9e7,
        _0x21fe95 = "",
        _0x2b76b9 = "";
      for (_0x50b9e7 = 0; 3 >= _0x50b9e7; _0x50b9e7++) {
        _0x21fe95 += (_0x2b76b9 = "0" + (_0x11ba14 >>> 8 * _0x50b9e7 & 255).toString(16)).substr(_0x2b76b9.length - 2, 2);
      }
      return _0x21fe95;
    }
    var _0x249b52, _0x243769, _0x3d774c, _0x243eef, _0x13c433, _0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac;
    for (_0x1be5ac = function (_0x16fbc1) {
      for (var _0x3abc8b, _0x3812d5 = _0x16fbc1.length, _0x365fee = _0x3812d5 + 8, _0x25dc23 = 16 * ((_0x365fee - _0x365fee % 64) / 64 + 1), _0x18c769 = new Array(_0x25dc23 - 1), _0x355a31 = 0, _0x2d4fbc = 0; _0x3812d5 > _0x2d4fbc;) {
        _0x355a31 = _0x2d4fbc % 4 * 8;
        _0x18c769[_0x3abc8b = (_0x2d4fbc - _0x2d4fbc % 4) / 4] = _0x18c769[_0x3abc8b] | _0x16fbc1.charCodeAt(_0x2d4fbc) << _0x355a31;
        _0x2d4fbc++;
      }
      _0x355a31 = _0x2d4fbc % 4 * 8;
      _0x18c769[_0x3abc8b = (_0x2d4fbc - _0x2d4fbc % 4) / 4] = _0x18c769[_0x3abc8b] | 128 << _0x355a31;
      _0x18c769[_0x25dc23 - 2] = _0x3812d5 << 3;
      _0x18c769[_0x25dc23 - 1] = _0x3812d5 >>> 29;
      return _0x18c769;
    }(_0x452b77 = function (_0x28772a) {
      _0x28772a = _0x28772a.replace(/\r\n/g, "\n");
      for (var _0x1abf9d = "", _0x153932 = 0; _0x153932 < _0x28772a.length; _0x153932++) {
        var _0x348fe7 = _0x28772a.charCodeAt(_0x153932);
        128 > _0x348fe7 ? _0x1abf9d += String.fromCharCode(_0x348fe7) : _0x348fe7 > 127 && 2048 > _0x348fe7 ? (_0x1abf9d += String.fromCharCode(_0x348fe7 >> 6 | 192), _0x1abf9d += String.fromCharCode(63 & _0x348fe7 | 128)) : (_0x1abf9d += String.fromCharCode(_0x348fe7 >> 12 | 224), _0x1abf9d += String.fromCharCode(_0x348fe7 >> 6 & 63 | 128), _0x1abf9d += String.fromCharCode(63 & _0x348fe7 | 128));
      }
      return _0x1abf9d;
    }(_0x452b77)), _0x51132e = 1732584193, _0x2a7e07 = 4023233417, _0x131ec7 = 2562383102, _0x43ee66 = 271733878, _0x249b52 = 0; _0x249b52 < _0x1be5ac.length; _0x249b52 += 16) {
      _0x243769 = _0x51132e;
      _0x3d774c = _0x2a7e07;
      _0x243eef = _0x131ec7;
      _0x13c433 = _0x43ee66;
      _0x51132e = _0x45bd0b(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 0], 7, 3614090360);
      _0x43ee66 = _0x45bd0b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 1], 12, 3905402710);
      _0x131ec7 = _0x45bd0b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 2], 17, 606105819);
      _0x2a7e07 = _0x45bd0b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 3], 22, 3250441966);
      _0x51132e = _0x45bd0b(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 4], 7, 4118548399);
      _0x43ee66 = _0x45bd0b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 5], 12, 1200080426);
      _0x131ec7 = _0x45bd0b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 6], 17, 2821735955);
      _0x2a7e07 = _0x45bd0b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 7], 22, 4249261313);
      _0x51132e = _0x45bd0b(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 8], 7, 1770035416);
      _0x43ee66 = _0x45bd0b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 9], 12, 2336552879);
      _0x131ec7 = _0x45bd0b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 10], 17, 4294925233);
      _0x2a7e07 = _0x45bd0b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 11], 22, 2304563134);
      _0x51132e = _0x45bd0b(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 12], 7, 1804603682);
      _0x43ee66 = _0x45bd0b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 13], 12, 4254626195);
      _0x131ec7 = _0x45bd0b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 14], 17, 2792965006);
      _0x51132e = _0x425cee(_0x51132e, _0x2a7e07 = _0x45bd0b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 15], 22, 1236535329), _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 1], 5, 4129170786);
      _0x43ee66 = _0x425cee(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 6], 9, 3225465664);
      _0x131ec7 = _0x425cee(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 11], 14, 643717713);
      _0x2a7e07 = _0x425cee(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 0], 20, 3921069994);
      _0x51132e = _0x425cee(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 5], 5, 3593408605);
      _0x43ee66 = _0x425cee(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 10], 9, 38016083);
      _0x131ec7 = _0x425cee(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 15], 14, 3634488961);
      _0x2a7e07 = _0x425cee(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 4], 20, 3889429448);
      _0x51132e = _0x425cee(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 9], 5, 568446438);
      _0x43ee66 = _0x425cee(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 14], 9, 3275163606);
      _0x131ec7 = _0x425cee(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 3], 14, 4107603335);
      _0x2a7e07 = _0x425cee(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 8], 20, 1163531501);
      _0x51132e = _0x425cee(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 13], 5, 2850285829);
      _0x43ee66 = _0x425cee(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 2], 9, 4243563512);
      _0x131ec7 = _0x425cee(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 7], 14, 1735328473);
      _0x51132e = _0xad518b(_0x51132e, _0x2a7e07 = _0x425cee(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 12], 20, 2368359562), _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 5], 4, 4294588738);
      _0x43ee66 = _0xad518b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 8], 11, 2272392833);
      _0x131ec7 = _0xad518b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 11], 16, 1839030562);
      _0x2a7e07 = _0xad518b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 14], 23, 4259657740);
      _0x51132e = _0xad518b(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 1], 4, 2763975236);
      _0x43ee66 = _0xad518b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 4], 11, 1272893353);
      _0x131ec7 = _0xad518b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 7], 16, 4139469664);
      _0x2a7e07 = _0xad518b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 10], 23, 3200236656);
      _0x51132e = _0xad518b(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 13], 4, 681279174);
      _0x43ee66 = _0xad518b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 0], 11, 3936430074);
      _0x131ec7 = _0xad518b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 3], 16, 3572445317);
      _0x2a7e07 = _0xad518b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 6], 23, 76029189);
      _0x51132e = _0xad518b(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 9], 4, 3654602809);
      _0x43ee66 = _0xad518b(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 12], 11, 3873151461);
      _0x131ec7 = _0xad518b(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 15], 16, 530742520);
      _0x51132e = _0x2bc460(_0x51132e, _0x2a7e07 = _0xad518b(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 2], 23, 3299628645), _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 0], 6, 4096336452);
      _0x43ee66 = _0x2bc460(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 7], 10, 1126891415);
      _0x131ec7 = _0x2bc460(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 14], 15, 2878612391);
      _0x2a7e07 = _0x2bc460(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 5], 21, 4237533241);
      _0x51132e = _0x2bc460(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 12], 6, 1700485571);
      _0x43ee66 = _0x2bc460(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 3], 10, 2399980690);
      _0x131ec7 = _0x2bc460(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 10], 15, 4293915773);
      _0x2a7e07 = _0x2bc460(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 1], 21, 2240044497);
      _0x51132e = _0x2bc460(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 8], 6, 1873313359);
      _0x43ee66 = _0x2bc460(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 15], 10, 4264355552);
      _0x131ec7 = _0x2bc460(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 6], 15, 2734768916);
      _0x2a7e07 = _0x2bc460(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 13], 21, 1309151649);
      _0x51132e = _0x2bc460(_0x51132e, _0x2a7e07, _0x131ec7, _0x43ee66, _0x1be5ac[_0x249b52 + 4], 6, 4149444226);
      _0x43ee66 = _0x2bc460(_0x43ee66, _0x51132e, _0x2a7e07, _0x131ec7, _0x1be5ac[_0x249b52 + 11], 10, 3174756917);
      _0x131ec7 = _0x2bc460(_0x131ec7, _0x43ee66, _0x51132e, _0x2a7e07, _0x1be5ac[_0x249b52 + 2], 15, 718787259);
      _0x2a7e07 = _0x2bc460(_0x2a7e07, _0x131ec7, _0x43ee66, _0x51132e, _0x1be5ac[_0x249b52 + 9], 21, 3951481745);
      _0x51132e = _0xfec9e1(_0x51132e, _0x243769);
      _0x2a7e07 = _0xfec9e1(_0x2a7e07, _0x3d774c);
      _0x131ec7 = _0xfec9e1(_0x131ec7, _0x243eef);
      _0x43ee66 = _0xfec9e1(_0x43ee66, _0x13c433);
    }
    return (_0x238ee8(_0x51132e) + _0x238ee8(_0x2a7e07) + _0x238ee8(_0x131ec7) + _0x238ee8(_0x43ee66)).toLowerCase();
  };
function getToken(_0x57b272) {
  for (var _0xbf2894 = _0x57b272.split(";"), _0x526181 = 0; _0x526181 < _0xbf2894.length; _0x526181++) {
    var _0x527318 = _0xbf2894[_0x526181].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x527318[0])) {
      return _0x527318[1];
    }
  }
  return "-1";
}
wait = _0x26ccfb => {
  return new Promise(_0x2e9cb9 => {
    setTimeout(() => {
      _0x2e9cb9();
    }, _0x26ccfb * 1000);
  });
};
function updateCK(_0x3aa328, _0x28666c) {
  const _0x4c4bf1 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.queryminecenter/1.0/?jsv=2.6.2&appKey=12574478",
    headers: {}
  };
  _0x4c4bf1.headers.Cookie = _0x3aa328;
  _0x4c4bf1.headers.method = "GET";
  _0x4c4bf1.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  const _0x579bed = _0x4c4bf1;
  return tryCatchPromise(_0x2c520e => {
    try {
      request(_0x579bed, async (_0x48b040, _0x4c79eb, _0x1ba0ad) => {
        if (!_0x48b040 && _0x4c79eb.statusCode == 200) {
          var _0x584cd4 = JSON.stringify(_0x4c79eb.headers["set-cookie"]);
          n = /_m_h5_tk=(\S*);/;
          a = _0x584cd4.match(n)[1];
          o = " _m_h5_tk=" + a.split(";")[0];
          n = /_m_h5_tk_enc=(\S*);/;
          a = _0x584cd4.match(n)[1];
          var _0x12fefe = " _m_h5_tk_enc=" + a.split(";")[0];
          _0x3aa328 = setCookie(o, _0x12fefe, _0x3aa328);
          _0x2c520e(await checkCk(_0x3aa328, _0x28666c));
        } else {
          _0x2c520e(null);
        }
      });
    } catch (_0x10b80f) {
      console.log(NET_ERROR_TIP);
    }
  });
}
function setCookie(_0x47b039, _0x3a8abb, _0x3bac09) {
  let _0x25d346 = false;
  for (var _0x80fa2 = _0x3bac09.split(";"), _0x2956d8 = 0; _0x2956d8 < _0x80fa2.length; _0x2956d8++) {
    var _0x234ca1 = _0x80fa2[_0x2956d8].split("=");
    if (["_m_h5_tk", " _m_h5_tk"].indexOf(_0x234ca1[0]) > -1) {
      _0x25d346 = true;
      _0x80fa2[_0x2956d8] = _0x47b039;
    }
    if ([" _m_h5_tk_enc", "_m_h5_tk_enc"].indexOf(_0x234ca1[0]) > -1) {
      _0x80fa2[_0x2956d8] = _0x3a8abb;
      _0x25d346 = true;
    }
  }
  var _0x14f7b9 = "";
  if (_0x25d346) {
    for (_0x2956d8 = 0; _0x2956d8 < _0x80fa2.length; _0x2956d8++) {
      _0x14f7b9 += _0x80fa2[_0x2956d8];
      _0x2956d8 != _0x80fa2.length - 1 && (_0x14f7b9 += ";");
    }
  } else {
    _0x14f7b9 = _0x3bac09 + ";" + _0x47b039 + ";" + _0x3a8abb;
  }
  _0x3bac09 = _0x14f7b9;
  return _0x3bac09;
}
const checkCk = (_0x19c5a2, _0x54fe72) => {
  let _0x1b9158 = getToken(_0x19c5a2);
  _0x1b9158 = _0x1b9158.split("_")[0];
  r = {};
  o = JSON.stringify(r);
  c = 12574478;
  u = new Date().getTime();
  l = sign(_0x1b9158 + "&" + u + "&" + c + "&" + o);
  const _0x29c738 = {
    Cookie: _0x19c5a2,
    "User-Agent": User_Agent
  };
  d = _0x29c738;
  const _0x269fac = {
    url: "https://shopping.ele.me/h5/mtop.alsc.user.session.ele.check/1.0/?H5Request=true&api=mtop.alsc.user.session.ele.check&appKey=12574478&data={}&dataType=json&jsv=2.6.2&mainDomain=ele.me&pageDomain=ele.me&sign=" + l + "&subDomain=shopping&t=" + u + "&timeout=5000&type=json&v=1.0",
    method: "GET",
    headers: d
  };
  return tryCatchPromise(_0x43551d => {
    try {
      request(_0x269fac, async (_0x4ae973, _0x56df4a, _0x2f166a) => {
        if (!_0x4ae973 && _0x56df4a.statusCode == 200) {
          const _0x2c01c6 = JSON.parse(_0x2f166a);
          if (_0x2c01c6.data.errorCode === "000502") {
            console.log("第", _0x54fe72 + 1, "账号失效！请重新登录！！！??");
            _0x43551d(null);
          } else {
            if (_0x2c01c6.ret.includes("FAIL_SYS_TOKEN_EXOIRED::令牌过期") || _0x2c01c6.ret.includes("FAIL_SYS_TOKEN_EMPTY::令牌为空")) {
              _0x43551d(updateCK(_0x19c5a2, _0x54fe72));
            } else {
              _0x43551d(_0x19c5a2);
            }
          }
        } else {
          if (_0x4ae973 && _0x4ae973.message.indexOf("Invalid character in header content [\"Cookie\"]") != -1) {
            console.log("第", _0x54fe72 + 1, "账号ck不合法，请确认！！！");
          } else {
            console.log(_0x4ae973);
          }
          _0x43551d(null);
        }
      });
    } catch (_0x500d89) {
      console.log(NET_ERROR_TIP);
    }
  });
};
function execute(_0x27c8c4) {
  return new Promise(_0x25cbf8 => {
    exec(_0x27c8c4, function (_0x52dd3d, _0x14e22e, _0x581d75) {
      _0x52dd3d ? (console.error(_0x52dd3d), _0x25cbf8("")) : _0x25cbf8(_0x14e22e);
    });
  });
}
const validateCarmeNoCon = async (_0x4f2121, _0x43ae51) => {
    return true;
    const _0xf255b4 = CHECK_BASE_URL + "/check/kami/count?carmi=" + _0x4f2121 + "&success=" + _0x43ae51 + "&isNew=true";
    let _0x1fd429 = "";
    return tryCatchPromise(_0x1647b9 => {
      http.get(_0xf255b4, _0x38e4df => {
        _0x38e4df.on("data", _0xf696b1 => {
          _0x1fd429 += _0xf696b1.toString();
        });
        _0x38e4df.on("end", () => {
          let _0x534b74 = JSON.parse(_0x1fd429);
          if (!_0x534b74.code || _0x534b74.code !== 20000) {
            console.error("? " + _0x534b74.error || _0x534b74.message);
            process.exit(0);
          } else {
            _0x1647b9(_0x534b74.data.count);
          }
        });
      });
    });
  },
  checkCarmeCount = async (_0x3a80b9, _0x10367f, _0x30e59a) => {
    return true;
    const _0x36fd18 = {
        carmi: _0x3a80b9,
        userId: _0x10367f,
        gameType: _0x30e59a
      },
      _0x3da5d2 = CHECK_BASE_URL + "/check/kami/count?carmi=" + _0x3a80b9;
    var _0x1576d2 = {
      "content-type": "application/json"
    };
    var _0x38e79b = {
      url: _0x3da5d2,
      method: "POST",
      headers: _0x1576d2,
      body: JSON.stringify(_0x36fd18)
    };
    return tryCatchPromise(_0x17708d => {
      request(_0x38e79b, async (_0x52c1bf, _0x179b6a, _0x334fb0) => {
        if (!_0x52c1bf && _0x179b6a.statusCode == 200) {
          const _0x236c3e = JSON.parse(_0x334fb0);
          _0x236c3e.code !== 20000 && (console.error(_0x236c3e.message), process.exit(0));
          _0x17708d(_0x236c3e);
        } else {
          console.log(_0x52c1bf);
          _0x17708d(_0x52c1bf);
          process.exit(0);
        }
      });
    });
  },
  validateCarmeWithType = async (_0x31dcef, _0x342c55) => {
    return true;
    if (!_0x31dcef) {
      console.log("?卡密不能为空");
      process.exit(0);
    }
    const _0x4e154a = await execute("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
      _0x20ea98 = CHECK_BASE_URL + "/check/kami?carmi=" + _0x31dcef + "&type=" + _0x342c55 + "&containerId=" + _0x4e154a + "&isNew=true";
    let _0x11b9fd = "";
    return tryCatchPromise(_0x337819 => {
      http.get(_0x20ea98, _0x44660a => {
        _0x44660a.on("data", _0x2ec747 => {
          _0x11b9fd += _0x2ec747.toString();
        });
        _0x44660a.on("end", () => {
          const _0x137a53 = JSON.parse(_0x11b9fd);
          _0x137a53.code !== 20000 ? (console.error("?" + _0x137a53.message), process.exit(0)) : console.log(_0x137a53.data.msg);
          _0x337819(_0x137a53);
        });
      });
    });
  };
async function tryCatchPromise(_0xb24fd6) {
  return new Promise(_0x2dcc69 => {
    try {
      _0xb24fd6(_0x2dcc69);
    } catch (_0x126a5e) {
      console.log(NET_ERROR_TIP);
      _0x2dcc69();
    }
  });
}
function randomString(_0x214cb0) {
  var _0x48aa94 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
    _0x42ea9d = "";
  for (var _0x3fbbdd = _0x214cb0; _0x3fbbdd > 0; --_0x3fbbdd) {
    _0x42ea9d += _0x48aa94[Math.floor(Math.random() * _0x48aa94.length)];
  }
  return _0x42ea9d;
}
function getCookieMap(_0x3f8482) {
  let _0x3d4107 = /^(\S+)=(\S+)$/,
    _0x9faf3b = _0x3f8482.replace(/\s*/g, "").split(";"),
    _0x1b20e4 = new Map();
  for (let _0x2344c7 of _0x9faf3b) {
    let _0x415772 = _0x3d4107.exec(_0x2344c7);
    if (_0x415772) {
      _0x1b20e4.set(_0x415772[1], _0x415772[2]);
    }
  }
  return _0x1b20e4;
}
function getCookies() {
  console.log("版本：某知名大佬破解");
  let _0xed1e02 = [];
  if (process.env.elmck) {
    if (process.env.elmck.indexOf("&") > -1) {
      _0xed1e02 = process.env.elmck.split("&");
    } else {
      process.env.elmck.indexOf("\n") > -1 ? _0xed1e02 = process.env.elmck.split("\n") : _0xed1e02 = [process.env.elmck];
    }
  }
  return _0xed1e02;
}
const getUserInfo = _0x291de3 => {
  const _0x3d6f20 = {
    Cookie: _0x291de3,
    "user-agent": User_Agent
  };
  const _0x3a3c14 = {
    url: "https://restapi.ele.me/eus/v5/user_detail",
    headers: _0x3d6f20
  };
  return tryCatchPromise(_0x86136 => {
    request(_0x3a3c14, async (_0x30f737, _0x34369a, _0x429ca8) => {
      !_0x30f737 && _0x34369a.statusCode === 200 ? _0x86136(JSON.parse(_0x429ca8)) : _0x86136({});
    });
  });
};
function getCookieMap(_0x61af7) {
  const _0x4ab95c = _0x61af7.split(";").map(_0x1be5e9 => _0x1be5e9.trim().split("=")),
    _0xc0c6c6 = new Map();
  for (let _0x3769d2 = 0; _0x3769d2 < _0x4ab95c.length; _0x3769d2++) {
    const [_0x2a66fb, _0x55e82b] = _0x4ab95c[_0x3769d2];
    if (_0x2a66fb) {
      _0xc0c6c6.set(_0x2a66fb, decodeURIComponent(_0x55e82b));
    }
  }
  return _0xc0c6c6;
}
async function invalidCookieNotify(_0x49b828, _0x3744eb) {
  const _0x48169e = getCookieMap(_0x49b828);
  !_0x48169e.has("wxUid") ? console.log("没有获取到推送uid，不推送消息") : await sendNotify("登录失效通知", "###通知备注为：" + _0x3744eb + "的饿了么登录已失效，请重新登录", {
    uid: _0x48169e.get("wxUid")
  });
}
const _0x1243d0 = {
  checkCk: checkCk,
  User_Agent: User_Agent,
  getToken: getToken,
  sign: sign,
  wait: wait,
  validateCarmeWithType: validateCarmeWithType,
  randomString: randomString,
  getCookies: getCookies,
  getUserInfo: getUserInfo,
  validateCarmeNoCon: validateCarmeNoCon,
  getCookieMap: getCookieMap,
  invalidCookieNotify: invalidCookieNotify,
  checkCarmeCount: checkCarmeCount,
  tryCatchPromise: tryCatchPromise
};
module.exports = _0x1243d0;