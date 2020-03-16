const BASE_URL = 'https://app.zijinqianbao.com/app'; //生产环境
// const BASE_URL = 'http://192.168.10.148:8082/zjqbapp'; //148测试环境
// const BASE_URL = 'http://192.168.10.183:8080/zjqbapp';//唐政测试环境
// const BASE_URL = 'http://192.168.10.190:8080/zjqbapp';//泽斌测试环境

module.exports = {
    LOGIN: BASE_URL + '/loginAndRegister/login.do', //登录接口
    REGISTER: BASE_URL + '/loginAndRegister/register.do', //注册接口
    APPINDEX: BASE_URL + '/shop/appIndex.do', //首页商品数据
    CURRENTPRICE: BASE_URL + '/platform/currentPrice.do', //金价接口
    ADDADDRESSINIT: BASE_URL + '/user/info/addAddressInit.do', //二级联动省市数据
    // PRODUCTDETAILS: BASE_URL + '/product/info/productDetails.do', //商品详情页商品数据
    // PUTINCART: BASE_URL + '/product/putInCart.do', //添加进购物车    
    // CLASSIFICATION: BASE_URL + '/product/info/classification.do', //全部商品页商品分类
    // PRODUCTLIST: BASE_URL + '/product/info/productList.do', //全部商品页商品分类下的商品
    ISAUTHENTICATION: BASE_URL + '/mall/buyBack/order/isAuthentication.do', //查询是否实名认证
    GETARTICLEBYSEOKEY: BASE_URL + '/shop/getArticleBySeoKey.do', //获取回购协议
    DICLIST: BASE_URL + '/info/system/dicList.do', //获取银行卡列表
    BINDCARDSMS: BASE_URL + '/user/bindsCardSms.do', //绑卡页面获取验证码
    IMAGEUPLOAD: BASE_URL + '/aliyun/uplopadImage.do', //上传图片接口
    BINDCARD: BASE_URL + '/user/bindsCard.do', //绑定银行卡接口 
    CONFIRMIDIMAGESUPLOAD: BASE_URL + '/mall/buyBack/order/confirmIdImagesUpload.do', //上传身份证接口
    SEARCHRECOVERYPOUNDAGE: BASE_URL + '/mall/buyBack/order/searchRecoveryPoundage.do', //获取回购手续费接口
    CONFIRMRECOVERYORDER: BASE_URL + '/mall/buyBack/order/confirmRecoveryOrder.do', //提交回购订单接口
    STORELIST: BASE_URL + '/gold/info/storeList.do', //获取门店列表及id
    SEARCHRECOVERYREMAININGGOLDS: BASE_URL + '/mall/buyBack/order/searchRecoveryRemainingGolds.do', //查询剩余可回购数量
    SEARCHRECOVERYORDER: BASE_URL + '/mall/buyBack/order/searchRecoveryOrder.do', //查找回购记录
    CREATETRADINGORDER: BASE_URL + '/mall/buyBack/order/createTradingOrder.do', //创建点价订单,确定金价,返回订单号和手续费  
    EXECUTIVEBUYBACK: BASE_URL + '/mall/buyBack/order/executiveBuyBack.do', //提交点价订单
    SEARCHCANCLECOST: BASE_URL + '/mall/buyBack/order/searchCancleCost.do', //查询退货费用
    CANCLERECOVERORDER: BASE_URL + '/mall/buyBack/order/cancleRecoveryOrder.do', //取消订单
    GOLDPRICETREND: BASE_URL + '/platform/goldPriceTrend.do', //金价走势
    SENDSMS: BASE_URL + '/info/sendSms.do', //发送验证码接口
    BINDCARDSMS: BASE_URL + '/user/bindsCardSms.do', //绑卡页面获取验证码
    VALIDATIONPHONE: BASE_URL + '/user/validationPhone.do', //验证手机号与验证码是否匹配
    UPDATEPHONE: BASE_URL + '/user/updatePhone.do', //更新手机号
    USERBANKCARD: BASE_URL + '/user/userBankCard.do', //绑定银行卡信息
    APPLYUNBINDCARD: BASE_URL + '/user/applyUnbindCard.do', //解除绑定银行卡
    MODIFYLOGINPWD: BASE_URL + '/user/modifyLoginPwd.do', //更改登录密码
    SETTRADEPWD: BASE_URL + '/user/setTradePwd.do', //设置交易密码
    MODIFYTRADEPWD: BASE_URL + '/user/modifyTradePwd.do', //修改交易密码
    FINDTRADEPWDVERIFYSMS: BASE_URL + '/user/findTradePwdVerifySms.do', //重置交易密码时验证用户身份信息
    RESETTRADEPWD: BASE_URL + '/user/resetTradePwd.do', //提交重置后输入的密码
    USERADDRESSLIST: BASE_URL + '/user/userAddressList.do', //我的地址信息
    ADDADDRESSINIT: BASE_URL + '/user/info/addAddressInit.do', //添加收货地址初始化，获取省市数据
    ADDADDRESS: BASE_URL + '/user/addAddress.do', //添加收货地址，向后台提交数据
    DELETEADDRESS: BASE_URL + '/user/deleteAddress.do', //删除地址
    MODIFYADDRESS: BASE_URL + '/user/modifyAddress.do', //修改地址
    GETUSERINFO: BASE_URL + '/user/getUserInfo.do', //获取用户个人信息
    GETTUSERFUNDS: BASE_URL + '/user/getTUserFunds.do', //查询账户余额
    INITRECHARGEINFO: BASE_URL + '/pay/initRechargeInfo.do', //充值初始化
    RECHARGESENDSMS: BASE_URL + '/pay/rechargeSendSms.do', //充值发送短信
    RECHARGECONFIRM: BASE_URL + '/pay/rechargeConfirm.do', //提交充值数据
    WITHDRAWINIT: BASE_URL + '/pay/withdrawInit.do', //提现初始化
    WITHDRAWAL: BASE_URL + '/pay/withdrawal.do', //提交提现数据
    CASHDETAILLIST: BASE_URL + '/user/cashDetailList.do', //查询充值提现记录
    TRANSACTIONTYPELIST: BASE_URL + '/user/info/transactionTypeList.do', //现金明细查询
    USERGOLDINFO: BASE_URL + '/user/userGoldInfo.do', //账号黄金信息
    SALEGOLDINIT: BASE_URL + '/gold/saleGoldInit.do', //卖金初始化
    SALEGOLDVERIFY: BASE_URL + '/gold/saleGoldVerify.do', //卖金验证
    SALEGOLDORDERDETAIL: BASE_URL + '/gold/saleGoldOrderDetail.do', //获取卖金订单号
    SALEGOLD: BASE_URL + '/gold/saleGold.do', //卖金操作
    GETADVERTISEMENT: BASE_URL + '/shop/getAdvertisement.do', //卖金成功及提现挽留页面广告
    APPOINTSTORAGEGOLDINIT: BASE_URL + '/gold/appointStorageGoldInit.do', //预约存金初始化
    APPOINTSTORAGEGOLD: BASE_URL + '/gold/appointStorageGold.do', //预约存金操作    
    APPOINTSTORAGERULES: BASE_URL + '/gold/info/appointStorageRules.do', //预约存金规则
    APPOINTMENTSTORAGEGOLDLIST: BASE_URL + '/gold/appointmentStorageGoldList.do', //预约存金记录
    APPOINTMENTWITHDRAWALGOLDLIST: BASE_URL + '/gold/appointmentWithdrawalGoldList.do', //预约提金记录
    EXPRESSWITHDRAWGOLDINIT: BASE_URL + '/gold/expressWithdrawGoldInit.do', //快递提金初始化
    EXPRESSWITHDRAWGOLDVERIFY: BASE_URL + '/gold/expressWithdrawGoldVerify.do', //快递提金验证
    WITHDRAWGOLDORDER: BASE_URL + '/gold/withdrawGoldOrder.do', //快递提金提交
    STOREWITHDRAWGOLD: BASE_URL + '/gold/storeWithdrawGold.do', //门店提金初始化
    STOREWITHDRAWVERIFY: BASE_URL + '/gold/storeWithdrawVerify.do', //门店提金验证
    STOREWITHDRAW: BASE_URL + '/gold/storeWithdraw.do', //门店提金提交
    USERGOLDCURRENTINFO: BASE_URL + '/user/userGoldCurrentInfo.do', //账号活期金信息查询
    GOLDTRADETYPE: BASE_URL + '/user/info/goldTradeType.do', //活期金交易记录类型查询
    GOLDDETAILLIST: BASE_URL + '/user/goldDetailList.do', //活期金交易记录明细查询
    // MINIPROGRAMLOGIN: BASE_URL + '/loginAndRegister/miniProgramLogin.do', //微信登录授权
    MINIPROGRAMLOGIN: BASE_URL + '/loginAndRegister/miniProgramLogin2.do', //微信登录授权
    SENDSMSWEIXIN: BASE_URL + '/info/sendSmsWeixin.do', //微信注册验证码
    WEIXINCONNECT: BASE_URL + '/loginAndRegister/weixinConnect.do', //微信关联
    REMOVECONNECT: BASE_URL + '/user/removeConnect.do', //微信解除关联
    UPDATEWECHATMSG: BASE_URL + '/user/updateWeChatMsg.do', //更新服务端微信头像和名称
    WEIXINLOGIN: BASE_URL + '/loginAndRegister/weixinLogin.do', //设置内判断微信关联状态
    GETADVERTISEMENT: BASE_URL + '/shop/getAdvertisement.do', //回收首页视频
    SEARCHRECOVERYCONFIG: BASE_URL + '/mall/buyBack/order/searchRecoveryConfig.do', //回购配置参数
    ADDRESSFILTER: BASE_URL + '/mall/buyBack/order/addressFilter.do', //判断地址是否可收派
    SEARCHLASTUNDONERECOVERY: BASE_URL + '/mall/buyBack/order/searchLastUndoneRecovery.do', //获取最新的未完成的回购订单
    SEARCHRECOVERYORDERDETAILS: BASE_URL + '/mall/buyBack/order/searchRecoveryOrderDetails.do', // 获取订单回收流程进度
    UPDATERECOVERYORDER: BASE_URL + '/mall/buyBack/order/updateRecoveryOrder.do', //更新回购订单（快递单号、确认检测、退单等）
    SEARCHBUYBACKRECORDS: BASE_URL + '/mall/buyBack/order/searchBuyBackRecords.do', //回购订单批次回收记录
    LOCKTRADINGPRICE: BASE_URL + '/mall/buyBack/order/lockTradingPrice.do', //锁定回收金价
    QUERYFORH5: BASE_URL + '/businessCard/queryForH5.do', //分享页面
    VERIFICALOGINNAME: BASE_URL + '/loginAndRegister/verificaLoginName.do', //检测账号是否存在
    SENDSMSLOGINORREG: BASE_URL + '/info/sendSmsLoginOrReg.do', //领黄金页面发送验证码
    RECEIVEGOLDPOWDERREDENVELOPES: BASE_URL + '/goldPowder/redEnvelopes/receiveGoldPowderRedEnvelopes.do', //领取黄金
    COMMONWECHARORDER: BASE_URL + '/wechat/pay/commonWeChatOrder.do', //微信支付退单费用
    USERPROTOCOL: BASE_URL + '/info/userProtocol.do', //紫金用户协议
    RETURNGOODSORDER: BASE_URL + '/smallProgram/pay/returnGoodsOrder.do', //小程序支付退单快递费用接口
}