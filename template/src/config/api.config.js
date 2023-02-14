
export const isProd = (() => {
    let result = true
    try {
        if (wx.getAccountInfoSync) {
            const accountInfo = wx.getAccountInfoSync()
            const { envVersion } = accountInfo.miniProgram
            // develop trial release
            if (['develop', 'trial'].includes(envVersion)) {
                result = false
            }
        }
    } catch (e) {}
    return result
})()


export default {

    H5_BASE_URL: isProd ? 'https://rochecrm.g2digi.com/h5/' : 'https://roche.jiappo.cn/h5/',
    // H5_BASE_URL: isProd ? 'https://rochecrm.g2digi.com/h5/' : 'https://test.owulia.com/h5-static/h5-roche/',

    // 2.1	前台用户登陆
    DO_USER_LOGIN: 'AppletApi/UserAuthorize',

    // 2.31	绑定手机号
    DO_USER_PHONE_BIND: 'AppletApi/BindMobile',

    // 2.32	解密手机号
    DO_USER_PHONE_DECODE: 'AppletApi/DecodePhone',

    // 2.0 签到获取用户信息
    REQ_USER_INFO: 'User/GetUserInfo',

    // 2.2	前台用户首页
    REQ_HOME_INDEX: 'Home/GetUserIndex',

    // 2.3	前台用户签到
    DO_USER_SIGN_IN: 'Home/UserSignIn',

    // 2.4	前台个人中心血糖数据
    REQ_MEASURE_SUGAR_LIST: 'User/GetTestSugarList',

    // 血糖日志
    REQ_MEASURE_SUGAR_RECORDS: 'User/GetTestSugarPage',

    // 2.5	前台用户建档
    DO_ARCHIVES_SUBMIT: 'RocheApi/SetArchives',

    // 2.6	前台用户拍照识别机器
    DO_DEVICE_SUBMIT: 'RocheApi/SyncUserMachine',

    // 2.7	前台用户个人中心设备删除
    DO_DEVICE_DELETE: 'RocheApi/DelUserMachine',

    // 2.8	前台用户拍照测糖任务 （废弃）
    // DO_MEASURE_SUGAR_SUBMIT: 'RocheApi/SetTestSugar',


    // 2.28	今日任务说明 （废弃）
    // REQ_MEASURE_TASK_INFO: 'RocheApi/GetCurrentDateConfigTask',

    // 2.9	前台获取单个测糖记录
    REQ_MEASURE_SUGAR_INFO: 'RocheApi/GetTestSugar',

    // 2.10	前台获取今日运动任务
    REQ_EXERCISE_TASK_INFO: 'Home/GetMotionInfo',

    // 2.11	前台同步运动数据
    DO_EXERCISE_SUBMIT: 'Home/SyncMotion',

    // 2.12	前台获取今日学习任务 (废弃)
    // REQ_STUDY_TASK_INFO: 'Home/GetStudyInfo',

    // 2.13	前台完成学习任务数据
    DO_STUDY_TASK_FINISH: 'Home/CompleteStudy',

    // 2.14	前台我的积分列表
    REQ_INTEGRAL_LIST: 'User/GetUserScore',

    // 2.15	前台个人中心设备管理列表
    REQ_DEVICE_LIST: 'User/GetUserMachines',

    // 2.16	前台个人中心运动计划列表
    REQ_EXERCISE_PLAN: 'User/GetUserMotions',

    // 2.17	前台个人中心我的收藏列表
    REQ_COLLECT_LIST: 'User/GetUserCollectPage1',

    // 2.20	百度 OCR 图片识别
    DO_OCR_BASIC: 'ThirdApi/AccurateBasic',

    // 2.21	百度OCR仪器仪表盘读数识别
    DO_OCR_METER: 'ThirdApi/AccurateMeter',

    // 2.21	获取 饮食名称、单位名称
    REQ_DIET_CONFIG_LIST: 'RocheApi/GetSystemDataConfigs',

    // 2.22	前台保存餐饮记录
    DO_DIET_SUBMIT: 'RocheApi/SaveUserFoods',

    // 2.23	前台获取餐饮记录
    REQ_DIET_INFO: 'RocheApi/GetUserFoods',

    // 获取后台设置的测糖计划配置
    REQ_MEASURE_PLAN_INFO: 'RocheApi/GetTestSugarConfig',

    // 2.25	设置用户测糖计划配置
    DO_MEASURE_PLAN_SUBMIT: 'RocheApi/SaveUserTestSugarConfig',

    // 2.26	获取用户自定义测糖计划配置
    REQ_MEASURE_PLAN_CUSTOM_INFO: 'RocheApi/GetUserTestSugarConfigs',

    // 2.27	上传图片
    DO_IMAGE_UPLOAD: 'Comm/UploadImage',

    // 保存用户信息
    DO_USER_SET: 'User/SetUserInfo',

    // 2.30	微信运动解密
    REQ_WX_EXERCISE_INFO: 'AppletApi/WxSportAESDecrypt',

    // 2.35	验证用户上传血糖流程
    DO_CHECK_MEASURE_SUGAR_INFO: 'RocheApi/CheckTestSugar',

    // 2.34	获取餐点上传信息
    REQ_MEASURE_SUGAR_OCR_RECORDS: 'RocheApi/GetTestSugarRecordList',

    // 2.36	获取用户优惠券列表
    REQ_COUPON_LIST: 'User/GetUserCouponList',



    // 积分商城
    // 2.1	获取商品分类列表
    REQ_MALL_CATEGORY_LIST: 'Mall/GetProductCategoryList',

    // 2.1	获取商品列表
    REQ_MALL_LIST: 'Mall/GetProductList',

    // 2.2	获取商品详情
    REQ_MALL_GOODS_INFO: 'Mall/GetProductDetail',

    // 2.3	获取购物车列表
    REQ_MALL_CART_LIST: 'Mall/GetMallCartList',

    // 2.4	添加购物车
    DO_MALL_CART_ADDED: 'Mall/AddMallCart',

    // 2.5	移除购物车
    DO_MALL_CART_DELETE: 'Mall/DelMallCart',

    // 2.6	提交订单
    DO_MALL_ORDER_SUBMIT: 'Mall/SubmitOrder',

    // 2.7	获取订单列表
    REQ_MALL_ORDER_LIST: 'Mall/GetOrderDetailList',

    // 2.8	获取物流信息
    REQ_MALL_ORDER_EXPRESS: 'Mall/GetOrderExpress',

    // 2.6	获取购物车商品数
    REQ_MALL_CART_NUM: 'Mall/GetMallCartNum',

    // 2.11	获取默认收货地址信息
    REQ_MALL_ADDRESS_DEFAULT_INFO: 'Mall/GetDeafultAddress',

    // 2.12	获取省份
    REQ_MALL_PROVINCE_LIST: 'Comm/GetProvinceList',

    // 2.13	获取城市
    REQ_MALL_CITY_LIST: 'Comm/GetCityList',

    // 2.14	获取区县
    REQ_MALL_AREA_LIST: 'Comm/GetAreaList',



    // ----- 2021-05-19 ------
    // 2.26	获取用户当周在执行的计划
    REQ_MEASURE_CURRENT_PLAN_INFO: 'RocheApi/GetCurrentTestSugarConfig',

    // 3.1	前台用户上传测糖任务
    DO_MEASURE_SUGAR_SUBMIT: 'Task/SetTestSugar',

    // 3.2	获取用户当前周任务列表
    REQ_MEASURE_TASK_INFO: 'Task/GetUserTaskWeekReport',



    // ----- 2021-06-27 -------
    // 2.39	查询版本号
    REQ_VERSION_INFO: 'AppletApi/GetVersion',



    // ----- 2021-07-04 上传小票 -------
    // 2.5	前台上传小票
    DO_RECEIPT_UPLOAD: 'mall/SubmitBill',

    // 2.6	我的小票列表
    REQ_RECEIPT_LIST: 'mall/GetMyBilllList',

    // 2.7	前台领取红包
    DO_RECEIPT_RED_PACKAGE_RECEIVE: 'Mall/ReceiveRedPackage',

    // 2.8	前台是否有未领取红包
    REQ_RED_PACKAGE_STATUS: 'Mall/GetHasMyReceiveRedPackage',



    // ----- 2021-08-15 28天训练营 -------

    // 3.1 获取训练营
    REQ_CAMP_INFO: 'DrillApi/GetCurrentDrillUser',

    // 3.2	激活训练营
    DO_CAMP_ACTIVATION: 'DrillApi/ActivationDrillUser',

    // 3.3	获取积分打卡
    REQ_CAMP_CLOCK_INFO: 'DrillApi/GetIntegralPunchIn',

    // 3.4	获取文章、测试、问卷
    REQ_CAMP_ARTICLE_LIST: 'DrillApi/GetDrillArticle',

    // 获取文章、测试、问卷详情
    REQ_CAMP_ARTICLE_INFO: 'DrillApi/GetDrillArticleDetail',

    // 3.5	回复文章调研
    DO_CAMP_ARTICLE_FEEDBACK: 'DrillApi/ReplyDrillArticle',

    // 3.6	回复测试
    DO_CAMP_TESTING_SUBMIT: 'DrillApi/ReplyDrillQuestionnaire',

    // 3.7	获取作答明细
    DO_CAMP_TESTING_INFO: 'DrillApi/GetDrillQuestionnaireDetail',

    // 3.8	登记训练营快递信息
    DO_CAMP_RECEIVING_SUBMIT: 'DrillApi/RegDrillExpress',

    // 3.9	获取训练营快递信息
    REQ_CAMP_RECEIVING_INFO: 'DrillApi/GetDrillExpress',

    // 获取短信验证码
    DO_SMS_SEND: 'Comm/SendSms',

    // 埋点
    DO_TRACK_SUBMIT: 'DrillApi/SetDrillClick',


    // 3.3	获取Banner列表
    REQ_BANNER_LIST: 'Comm/GetBannerList',

    // 3.4	提交用户行为统计
    DO_ACTION_SUBMIT: 'Comm/AddTrackDetail',


    // 2.40	前台用户绑定蓝牙机器
    DO_BLUETOOTH_BIND: 'RocheApi/BindUserMachine',

    // 2.41	获取绑定的蓝牙机器
    REQ_BLUETOOTH_LIST: 'RocheApi/GetBluetoothMachines',

    // 3.5	前台用户批量测糖
    DO_BLUETOOTH_DATA_UPLOAD: 'Task/SetTestSugarList',


    // 2021-12-05
    // 2.42	获取用户获奖列表
    REQ_USER_PRIZE_LIST: 'user/GetUserPrizeList',

    // 2.43	抽奖基本信息
    REQ_LUCK_DRAW_INFO: 'MemberDay/GetMemberDayPrize',

    // 2.44	抽奖
    DO_LUCK_DRAW_SUBMIT: 'MemberDay/DrawMemberPrize',

    // 2.45	会员日登记收货信息
    DO_LUCK_DRAW_RECEIVING: 'MemberDay/RegMemberExpress',

    // 2.15	提交秒杀订单
    DO_SEC_KILL_ORDER_CREATE: 'Mall/SecKillOrder',



    // 2021-12-25 蓝牙需求改动
    DO_BLUETOOTH_UNBIND: 'RocheApi/DelBluetoothMachine',


    // 2022-02-18 线下活动抽奖
    // 获取当前活动
    REQ_ACTIVITY_OFFLINE_INFO: 'AppletActivity/GetCurrentActivity',

    // 用户抽奖
    DO_ACTIVITY_OFFLINE_DRAW: 'AppletActivity/AddActivityUser',

    // 用户上传信息
    DO_ACTIVITY_OFFLINE_RECEIVING: 'AppletActivity/AddActivityUserDetail',



    // 2022-04-29 新增血糖餐点修改
    DO_SUGAR_RECORD_UPDATE: 'user/setTestSugar',



    // 2022-05-28 社区
    // 餐食打卡列表
    REQ_DIET_CLOCK_IN_LIST: 'Meal/GetPage',

    // 食物标签
    REQ_DIET_TAGS_LIST: 'Meal/GetEatsWithCate',

    // 餐食打卡发帖
    DO_DIET_CLOCK_IN_SUBMIT: 'Meal/Recode',

    // 餐食打卡帖子删除
    DO_DIET_CLOCK_IN_DELETE: 'Meal/Del',

    // 餐食打卡发帖详情
    REQ_DIET_CLOCK_IN_INFO: 'Meal/GetRecode',

    // 餐食打卡添加评论
    DO_DIET_CLOCK_IN_COMMENT_SUBMIT: 'Meal/AddReplay',

    // 餐食打卡评论列表
    REQ_DIET_CLOCK_IN_COMMENT_LIST: 'Meal/GetReplay',

    // 餐食打卡点赞 / 取消点赞
    DO_DIET_CLOCK_IN_LIKE: 'Meal/AddLike',

    // 选择话题标签
    REQ_DIET_TOPIC_LIST: 'Meal/GetMealTags',

    // 餐食打款收藏 / 取消收藏
    DO_DIET_CLOCK_IN_COLLECT: 'Meal/AddFav',

    // 交流广场
    REQ_SQUARE_LIST: 'Exchange/GetPage',

    // 交流广场删帖
    DO_SQUARE_DELETE: 'Exchange/Del',

    // 发帖
    DO_SQUARE_SUBMIT: 'Exchange/AddRecord',

    // 选择话题标签
    REQ_SQUARE_TOPIC_LIST: 'Exchange/GetExchangeTags',

    // 添加评论
    DO_SQUARE_COMMENT_SUBMIT: 'Exchange/AddReplay',

    // 获取评论
    REQ_SQUARE_COMMENT_LIST: 'Exchange/GetReplay',

    // 点赞 or 取消点赞
    DO_SQUARE_LIKE: 'Exchange/AddLike',

    // 收藏 / 取消收藏
    DO_SQUARE_COLLECT: 'Exchange/AddFav',

    // 获取详情
    REQ_SQUARE_INFO: 'Exchange/GetRecode',

    // 食谱列表
    REQ_COLLEGE_RECIPES_LIST: 'CookBook/GetPage',

    // 产品列表
    REQ_COLLEGE_PRODUCT_LIST: 'CommunityProduct/GetPage',

    // 服务列表
    REQ_COLLEGE_SERVICE_LIST: 'CommunityServ/GetPage',

    // 轻糖百科分类列表
    REQ_COLLEGE_WIKI_CLASSIFY_LIST: 'BaiKe/GetAllCate',

    // 轻糖百科列表
    REQ_COLLEGE_WIKI_LIST: 'BaiKe/GetPage',

    // 举报
    DO_TIP_OFF_SUBMIT: 'FeedbackReport/AddReport',


    // 我的动态
    REQ_DYNAMIC_LIST: 'User/GetMyHistory',

    // 我的控糖成果心情
    DO_MOOD_SUBMIT: 'SugarControlTask/AddTask',

    // 按年月出现我的控糖任务
    REQ_MOOD_LIST: 'SugarControlTask/GetMonthList',

    // 我的发帖
    REQ_POST_LIST: 'User/GetUserArticle',

    // 评论通知
    REQ_NOTICE_COMMENT_LIST: 'User/GetMyArticleReplays',

    // 点赞通知
    REQ_NOTICE_LIKES_LIST: 'User/GetMyArticleLikes',

    // 精选
    REQ_BOUTIQUE_LIST: 'Community/GetExcellentArticlePage',


    // 任务
    REQ_INTEGRAL_TASK_INFO: 'Community/GetTaskScoreData',


    // 获取趋势图
    REQ_SUGAR_TREND: 'RocheApi/GetSugarTrend',

    // 获取蜘蛛图
    REQ_SUGAR_SPIDER: 'RocheApi/GetSpider',

    // 获取报告
    REQ_MONTH_REPORT: 'RocheApi/GetMonthReport',


    // 徽章接口
    REQ_MEDAL_LIST: 'Home/GetUserCoress',

    // 徽章详情接口
    REQ_MEDAL_INFO: 'Home/GetCoressCount',

    // 周周打卡
    REQ_WEEK_CLOCK_IN_INFO: 'Community/GetWeekTaskData',

    // 身份标志保存
    DO_USER_INFO_SAVE: 'User/SaveUserInfo',

    // 打卡分享统计
    DO_DIET_CLICK_IN_SHARE_SET: 'Meal/SetShare',

    // 交流分享统计
    DO_SQUARE_SHARE_SET: 'Exchange/SetShare',


    // 餐食打卡删除评论
    DO_DIET_CLOCK_IN_COMMENT_DELETE: 'Meal/DelReplay',

    // 交流广场
    DO_SQUARE_COMMENT_DELETE: 'Exchange/DelReplay',


    // 2022-11-13 会员主题活动
    REQ_TOPIC_HOT_LIST: 'Community/GetTags',

    REQ_TOPIC_HOT_INFO: 'Community/GetTagByIdType',

    // 设置头像和昵称
    DO_SET_USER_BASE: 'User/SetUserNickName',


    // ----- 2023-01-03 妊娠训练营 -------

    // 3.1 获取训练营
    REQ_DRILL_INFO: 'DrillNew/GetCurrentDrillUser',

    // 3.2	激活训练营
    DO_DRILL_ACTIVATION: 'DrillNew/ActivationDrillUser',

    // 3.3	获取积分打卡
    REQ_DRILL_CLOCK_INFO: 'DrillNew/GetIntegralPunchIn',

    // 3.4	获取文章、测试、问卷
    REQ_DRILL_ARTICLE_LIST: 'DrillNew/GetDrillArticle',

    // 获取文章、测试、问卷详情
    REQ_DRILL_ARTICLE_INFO: 'DrillNew/GetDrillArticleDetail',

    // 3.5	回复文章调研
    DO_DRILL_ARTICLE_FEEDBACK: 'DrillNew/ReplyDrillArticle',

    // 3.6	回复测试
    DO_DRILL_TESTING_SUBMIT: 'DrillNew/ReplyDrillQuestionnaire',

    // 3.7	获取作答明细
    DO_DRILL_TESTING_INFO: 'DrillNew/GetDrillQuestionnaireDetail',

    // 绑定手机号
    DO_BIND_PHONE: 'User/BindPhone',


    // 2023-02-02
    // 获取本周周任务中奖记录
    REQ_PRIZE_RECORD_LIST: 'Community/GetWeekPrizeList'
}
