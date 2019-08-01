/* eslint comma-dangle: ["error", "always"] */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const layout = resolve => require(['./../components/layout/layout.vue'], resolve); // 框架

const layout_lct = resolve => require(['./../components/layout_lct/layout.vue'], resolve); // 框架

const myAnalysis = resolve => require(['./../components/pages/mine/my_analysis/index.vue'], resolve); // 我的分析
const templateAnalysisTask = resolve => require(['./../components/pages/mine/template_analysis/task/index.vue'], resolve); // 模板分析任务
const templateAnalysisResult = resolve => require(['./../components/pages/mine/template_analysis/result/index.vue'], resolve); // 模板分析结果
const templateInstance = resolve => require(['./../components/pages/mine/template_analysis/template_instance.vue'], resolve); // 模板分析实例
const extractAnalysisResult = resolve => require(['./../components/pages/mine/extract_analysis/result/index.vue'], resolve); // 提取分析结果
const extractAnalysisTask = resolve => require(['./../components/pages/mine/extract_analysis/task/index.vue'], resolve); // 提取分析任务
const addGroup = resolve => require(['./../components/pages/group/add_group/group_detail.vue'], resolve); // 新增人群详情
const groupIndex = resolve => require(['./../components/pages/group/add_group/index.vue'], resolve); // 新增人群首页
const groupIframe = resolve => require(['./../components/pages/group/add_group/group_iframe.vue'], resolve); // 人群iframe
const groupSql = resolve => require(['./../components/pages/group/add_group/group_sql.vue'], resolve); // 新增sql人群
const groupLooklike = resolve => require(['./../components/pages/group/add_group/group_looklike.vue'], resolve); // 新增looklike人群
const groupMapAccount = resolve => require(['./../components/pages/group/add_group/mapaccount.vue'], resolve); // 新增looklike人群

// 本地数据上传
const ldIndex = resolve => require(['./../components/pages/mine/localData/ldIndex.vue'], resolve); // 本地数据详情
const ldList = resolve => require(['./../components/pages/mine/localData/ldList.vue'], resolve); // 本地数据详情
const ldDetails = resolve => require(['./../components/pages/mine/localData/ldDetails.vue'], resolve); // 本地数据详情

// 运营
const pushList = resolve => require(['./../components/pages/operation/push_list.vue'], resolve); // 推送列表
const newsPush = resolve => require(['./../components/pages/operation/news_push.vue'], resolve); // 消息推送
const groupPush = resolve => require(['./../components/pages/operation/group_push.vue'], resolve); // 人群推送
const pushDetail = resolve => require(['./../components/pages/operation/push_detail.vue'], resolve); // 推送详情
const operationPage = resolve => require(['./../components/pages/operation/operation_page.vue'], resolve); // 推送主页
const dataPush = resolve => require(['./../components/pages/operation/dataPush.vue'], resolve); // 推送数据
const instance = resolve => require(['./../components/pages/operation/instance.vue'], resolve); // 实例列表
const effectAnalysisResult = resolve => require(['./../components/pages/operation/effectAnalysisResult.vue'], resolve); // 实例列表

// 配置
const addDataSource = resolve => require(['./../components/pages/configs/addDataSource/index.vue'], resolve); // 新增数据源
const dataSourceList = resolve => require(['./../components/pages/configs/dataSourceList.vue'], resolve); // 新增数据源

/* 权限管理 */

const permission = resolve => require(['./../components/pages/permission/index.vue'], resolve); // 权限主路由
const pList = resolve => require(['./../components/pages/permission/pList.vue'], resolve); // 权限列表
const pAnalysis = resolve => require(['./../components/pages/permission/pAnalysis.vue'], resolve); // 提取分析
const pUserhx = resolve => require(['./../components/pages/permission/pUserhx.vue'], resolve); // 用户画像
const pOperation = resolve => require(['./../components/pages/permission/pOperation.vue'], resolve); // 运营渠道
const pApproval = resolve => require(['./../components/pages/permission/pApproval.vue'], resolve); // 我的审批
const pApprovaled = resolve => require(['./../components/pages/permission/pApprovaled.vue'], resolve); // 我的审批
const pMBA = resolve => require(['./../components/pages/permission/pMBA.vue'], resolve); // 我的审批
const success = resolve => require(['./../components/pages/permission/success.vue'], resolve); // 审批成功页
const pMapAccount = resolve => require(['./../components/pages/permission/pMapAccount.vue'], resolve); // 运营渠道

/* 更新日志 */
const updateLog = resolve => require(['./../components/pages/updateLog/index.vue'], resolve); // 更新日志

/* 管理后台-运营分析 */
const manage = resolve => require(['./../components/pages/manage/index.vue'], resolve); // 运营分析首页
const overview = resolve => require(['./../components/pages/manage/overview.vue'], resolve); //
const access = resolve => require(['./../components/pages/manage/access.vue'], resolve); //
const rankings = resolve => require(['./../components/pages/manage/rankings.vue'], resolve); //
const details = resolve => require(['./../components/pages/manage/details.vue'], resolve); // 详情
const customer = resolve => require(['./../components/pages/manage/customer.vue'], resolve); // 客群
const downloadRecord = resolve => require(['./../components/pages/manage/downloadRecord.vue'], resolve); // 客群
const userManage = resolve => require(['./../components/pages/manage/userManage.vue'], resolve); // 用户管理
const whiteList = resolve => require(['./../components/pages/manage/whiteList.vue'], resolve); // 用户管理
const updateInfo = resolve => require(['./../components/pages/manage/updateInfo.vue'], resolve); // 用户管理
const userManageDetail = resolve => require(['./../components/pages/manage/userManageDetail.vue'], resolve); // 查看用户管理

/* 客群 */
const allChannel = resolve => require(['./../components/pages_lct/analysis_allChannel.vue'], resolve); // 全渠道分析
const buy = resolve => require(['./../components/pages_lct/analysis_buy.vue'], resolve); // 申购分析
const channelPath = resolve => require(['./../components/pages_lct/analysis_channelPath.vue'], resolve); // 渠道路径分析
const productPath = resolve => require(['./../components/pages_lct/analysis_productPath.vue'], resolve); // 产品路径分析
const lctDetail = resolve => require(['./../components/pages_lct/detail.vue'], resolve); // 客群详情
const lctIndex = resolve => require(['./../components/pages_lct/index.vue'], resolve); //客群列表
const subcustomGroup = resolve => require(['./../components/pages_lct/subcustomGroup.vue'], resolve); //子客群列表
const latelyLaunch = resolve => require(['./../components/pages_lct/latelyLaunch.vue'], resolve); // 最近投放
const customGroupOperation = resolve => require(['./../components/pages_lct/customGroupOperation.vue'], resolve); // 客群运算
const createCustomerGroup = resolve => require(['./../components/pages_lct/createCustomerGroup.vue'], resolve); // 创建客群
const combineGroup = resolve => require(['./../components/pages_lct/combineGroup.vue'], resolve); // 组合客群 创建客群组
const convertRate = resolve => require(['./../components/pages_lct/convertRate.vue'], resolve); // 组合客群 创建客群组

/* 移动分析 */
const mtaHomeIndex = resolve => require(['./../components/pages/mta/index.vue'], resolve); // 趋势页面
const mtaHeatMapIndex = resolve => require(['./../components/pages/mta/heatMap/index.vue'], resolve); // 热力图
const mtaEventAnalyzeIndex = resolve => require(['./../components/pages/mta/eventAnalyze/index.vue'], resolve); // 事件分析
const mtaPageAnalyzeIndex = resolve => require(['./../components/pages/mta/pageAnalyze/index.vue'], resolve); // 页面分析
const mtaPathAnalyzeIndex = resolve => require(['./../components/pages/mta/pathAnalyze/index.vue'], resolve); // 路径分析
const mtaFunelRate = resolve => require(['./../components/pages/mta/funnelRate/index.vue'], resolve); // 漏斗转化率页面
const mtaFunelPage = resolve => require(['./../components/pages/mta/funnelRate/funelPageIndex.vue'], resolve); // 漏斗转化率详情
const mtaPageTrend = resolve => require(['./../components/pages/mta/common/pageTrend.vue'], resolve); // 趋势页面

// import API from '@/components/api/util.js'


function  getRoutes(context, layout) {
  let fbiRouter = [
    // {
    //   path: '*',
    //   redirect: `${context}/mine/myAnalysis`
    // },
    {
      path: `${context}/mine`,
      component: layout,
      children: [
        {
          path: '',
          redirect: 'myAnalysis'
        },
        {
          path: 'myAnalysis',
          name: 'myAnalysis',
          component: myAnalysis,
          meta: {
            keepAlive: true, // 需要被缓存
            isBack: false
          }
        },
        {
          path: 'myAnalysis/templateAnalysisTask',
          name: 'templateAnalysisTask',
          component: templateAnalysisTask,
        },
        {
          path: 'myAnalysis/templateAnalysisResult',
          name: 'templateAnalysisResult',
          component: templateAnalysisResult,
        },
        {
          path: 'myAnalysis/instance',
          name: 'templateInstance',
          component: templateInstance,
        },
        {
          path: 'myAnalysis/extractAnalysisResult',
          name: 'extractAnalysisResult',
          component: extractAnalysisResult,
        },
        {
          path: 'myAnalysis/extractAnalysisTask',
          name: 'extractAnalysisTask',
          meta: {
            keepAlive: true
          },
          component: extractAnalysisTask,
        },
        {
          path: 'ldIndex',
          name: 'ldIndex',
          component: ldIndex,
        },
        {
          path: 'ldList',
          name: 'ldList',
          component: ldList,
        },
        {
          path: 'ldDetails',
          name: 'ldDetails',
          component: ldDetails,
        },
      ]
    },
    {
      path: `${context}/group`,
      component: layout,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'add/home',
          name: 'addGroupHome',
          component: groupIndex
        },
        {
          path: 'add/custom',
          name: 'addCustomGroup',
          component: addGroup
        },
        {
          path: 'add/sql',
          name: 'addGroupSql',
          component: groupSql
        },
        {
          path: 'add/looklike',
          name: 'addGroupLooklike',
          component: groupLooklike
        },
        {
          path: 'add/groupMapAccount',
          name: 'groupMapAccount',
          // component: groupMapAccount
          component: groupIframe
        },
        {
          path: 'add/:type',
          component: groupIframe
        },
        {
          path: 'home',
          name: 'myGroup',
          component: groupIframe
        },
        {
          path: 'detail',
          name: 'detail',
          component: groupIframe
        }
      ]
    },
    {
      path: `${context}/hx`,
      component: layout,
      children: [
        {
          path: '',
          redirect: 'profile'
        },
        {
          path: ':type',
          component: groupIframe
        }
      ]
    },
    {
      path: `${context}/operation`,
      component: layout,
      children: [
        { path: '', redirect: 'operationPage', },
        { path: 'pushList', name: 'pushList', component: pushList,
          meta: {
            keepAlive: true, // 需要被缓存
            isBack: false
          }
        },
        { path: 'newsPush', name: 'newsPush', component: newsPush, },
        { path: 'groupPush', name: 'groupPush', component: groupPush, },
        { path: 'pushDetail', name: 'pushDetail', component: pushDetail, },
        { path: 'operationPage', name: 'operationPage', component: operationPage, },
        { path: 'dataPush', name: 'dataPush', component: dataPush, },
        { path: 'instance', name: 'instance', component: instance, },
        { path: 'effectAnalysisResult', name: 'effectAnalysisResult', component: effectAnalysisResult, },

      ]

    },
    {
      path: `${context}/configs`,
      component: layout,
      children: [
        {
          path: '',
          redirect: 'addDataSource',//dataSourceList
        }, {
          path: 'addDataSource',
          name: 'addDataSource',
          component: addDataSource,
        }, {
          path: 'dataSourceList',
          name: 'dataSourceList',
          component: dataSourceList,
        },
      ]
    },
    {
      path: `${context}/updateLog`,
      component: layout,
      children: [
        {
          path: '',
          redirect: 'index',
        }, {
          path: 'index',
          name: 'updateLog',
          component: updateLog,
        }
      ]
    },
    {
      path: `${context}/permission`,
      component: layout,
      children: [
        {
          path: '/',
          name: 'permission',
          component: permission,
          children: [
            {
              path: '/',
              redirect: to=>{//动态重定向
                return { path:'pList',query:{type:1}}
              },
              name: 'pList',
              components: { permission: pList },
            },
            {
              path: 'pList',
              name: 'pList',
              components: { permission: pList },
            },
            {
              path: 'pAnalysis',
              name: 'pAnalysis',
              components: { permission: pAnalysis },
            },
            {
              path: 'pUserhx',
              name: 'pUserhx',
              components: { permission: pUserhx },
            },
            {
              path: 'pOperation',
              name: 'pOperation',
              components: { permission: pOperation },
            },
            {
              path: 'pApproval',
              name: 'pApproval',
              components: { permission: pApproval },
            },
            {
              path: 'pApprovaled',
              name: 'pApprovaled',
              components: { permission: pApprovaled },
            },
            {
              path: 'pMBA',
              name: 'pMBA',
              components: { permission: pMBA },
            },
            {
              path: 'pMapAccount',
              name: 'pMapAccount',
              components: { permission: pMapAccount },
            },
            {
              path: 'success',
              name: 'success',
              component: success,
              components: { permission: success },
            },
          ]
        },

      ]
    },
    {
      path: `${context}/manage`,
      component: layout,
      children: [
        {
          path: '/',
          name: 'manage',
          component: manage,
          children: [
            {path: '', name: 'overview', components: { manage: overview }},
            { path: 'access', name: 'access', components: { manage: access }},
            { path: 'rankings', name: 'rankings', components: { manage: rankings }},
            { path: 'customer', name: 'customer', components: { manage: customer }},
            { path: 'userManage', name: 'userManage', components: { manage: userManage }},
            { path: 'whiteList', name: 'whiteList', components: { manage: whiteList }},
            { path: 'updateInfo', name: 'updateInfo', components: { manage: updateInfo }},
            { path: 'downloadRecord', name: 'downloadRecord', components: { manage: downloadRecord }}
          ]
        },
        { path: 'details/:type', name: 'details', component: details, },
        { path: 'userManageDetail', name: 'userManageDetail', component: userManageDetail, },

      ]
    },
    {
      path: `${context}/mta`,
      component: layout,
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {path: 'index', name: 'mtaHomeIndex', component: mtaHomeIndex},
        {path: 'heatMap', name: 'heatMapIndex', component: mtaHeatMapIndex},
        {path: 'events', name: 'mtaEvnetAnalyzeIndex', component: mtaEventAnalyzeIndex},
        {path: 'eventsTrend', name: 'eventsTrend', component: mtaPageTrend},
        {path: 'pages', name: 'mtaPageAnalyzeIndex', component: mtaPageAnalyzeIndex},
        {path: 'pagesTrend', name: 'pagesTrend', component: mtaPageTrend},
        {path: 'funel', name: 'mtaFunelRateIndex', component: mtaFunelRate},
        {path: 'funelPage', name: 'mtaFunelPage', component: mtaFunelPage},
        {path: 'path', name: 'mtaPathAnalyzeIndex', component: mtaPathAnalyzeIndex},
      ]
    }
  ];
  return fbiRouter;
}

let lctRouter = {
  path: '/lct',
  component: layout_lct,
  children: [
    {
      path: '',
      redirect: 'group',
    },
    {
      path: '/lct/group',//客群列表
      name: 'lctIndex',
      component: lctIndex
    },
    {
      path: '/lct/group/labels',//动态客群
      name: 'lctIndex_labels',
      component: lctIndex
    },
    {
      path: '/lct/label',
      name: 'label',
      component: createCustomerGroup,
    },
    {
      path: '/lct/label/add/:type',//用户包人群、关系链人群、sql人群
      name: 'label_groups',
      component: groupIframe
    },
    {
      path: '/lct/label/add_sql',//新增sql人群
      name: 'label_add_sql',
      component: groupSql
    },
    {
      path: '/lct/group/subcustomGroup',//客群列表
      name: 'subcustomGroup',
      component: subcustomGroup
    },
    {
      path: '/lct/group/detail',//客群详情
      name: 'lctDetail',
      component: lctDetail
    },
    {
      path: '/lct/group/buy',//申购分析
      name: 'buy',
      component: buy
    }
    ,
    {
      path: '/lct/group/channelPath',//渠道路径分析
      name: 'channelPath',
      component: channelPath
    },
    {
      path: '/lct/group/allChannel',//全渠道分析
      name: 'allChannel',
      component: allChannel
    },
    {
      path: '/lct/group/productPath',//产品路径分析
      name: 'productPath',
      component: productPath
    },
    {
      path: '/lct/group/latelyLaunch',//最近投放
      name: 'latelyLaunch',
      component: latelyLaunch
    },
    {
      path: '/lct/customGroupOperation',//客群运算
      name: 'customGroupOperation',
      component: customGroupOperation
    },
    {
      path: '/lct/createCustomerGroup',//创建客群
      name: 'createCustomerGroup',
      component: createCustomerGroup
    },
    {
      path: '/lct/combineGroup',//创建客群
      name: 'combineGroup',
      component: combineGroup
    },
    {
      path: '/lct/group/convertRate',//页面路径-转化率
      name: 'convertRate',
      component: convertRate
    }
  ]
}

let fbiRoutes = getRoutes('', layout);
let reserveFbiRoutes = getRoutes('/lct', layout_lct);

let _router =  new Router({
  routes: fbiRoutes.concat([{
      path: '*',
      redirect: '/mine/myAnalysis'
    }],
    [lctRouter],
    reserveFbiRoutes
    ),
  scrollBehavior(to, from, savedPosition) { // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

//beforeEach to.path 不能重写，直接hook push函数
let push = _router.push;
_router.push = function () {
  let params = Array.prototype.slice.call(arguments);
  // debugger;
  if(_router.currentRoute.path.indexOf('/lct/') > -1){
    params.map(item => {
      if(item.path && item.path.indexOf("/lct/") < 0){
        item.path = '/lct' + item.path;
      }
      return item;
    })
  }
  push.apply(this, params);
}

export default _router;

