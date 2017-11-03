var list =
    [
        {"quest":"POJO","anser":"普通的java对象，JavaBeans"},
        {"quest":"Struts2步骤","anser":"下载jar包，创建项目，完善配置，创建Action"},
        {"quest":"Struts2主要组件","anser":"FilterDispatcher,Action,struts.xml,result"},
        {"quest":"下载jar包-创建项目-引用jar包","anser":"右键项目选择buildPath,选择add在目录中查找引用"},
        {"quest":"配置xml-过滤器-过滤类","anser":"&lt;filter&gt;&lt;filter-name&gt;FileName&lt;/filer-name&gt;&lt;filer-class&gt;ClassName&lt;/filter-class&gt;&lt;/filter&gt;"},
        {"quest":"配置xml-过滤器-过滤映射","anser":"&lt;filter-mapping&gt;&lt;filter-name&gt;FileName&lt;/filer-name&gt;&lt;filer-pattern&gt;path&lt;/filter-pattern&gt;&lt;/filter-mapping&gt;"},
        {"quest":"struts.xml配置-1","anser":"&lt;action name='hello' class='className' method='methodName'&gt;" +
        "&lt;result name='success'&gt;&lt;/HelloWorld.jsp/result&gt;&lt;/action&gt;"},
        {"quest":"Action","anser":"继承ActionSupport创建javaBeans,实现String execute方法，返回视图路径"},
        {"quest":"struts原理-流程","anser":"HttpServletRequest,ActionMap,StrutsPrepareAndExecuteFilter,Struts.xml,interceptor,Action,result,tpl,interceptor,HttpServletResponse"},
        {"quest":"struts.xml作用","anser":"应用中Action映射，和Action的Result定义"},
        {"quest":"struts.xml结构-包","anser":"package,包名称name,扩展继承extends,命名空间namespace"},
        {"quest":"struts.xml结构-拦截器","anser":"interceptors,interceptor,name名称，class加载的类"},
        {"quest":"struts.xml结构-全局结果集","anser":"global-result,result,name名称，url"},
        {"quest":"struts.xml结构-Action","anser":"action,name名称(访问的路由)，class引用类,method=''"},
        {"quest":"servlet api","anser":"ServletRequest,ServletResponse,ServletContext"},
        {"quest":"struts访问Servlet方法","anser":"ActionContext,实现***Aware接口，ServletActionContext"},
        {"quest":"struts动态调用方法","anser":"通配符，&lt;action&gt; name='helloworld_*_*' method='{1}{2}' class='' &lt;/action&gt;"},
        {"quest":"struts动态调用方法","anser":"通配符，用路由中 *，{1}，映射输入，输出"},
        {"quest":"默认action","anser":"default-action-ref,name(默认的action名称)"},
        {"quest":"修改后缀","anser":"修改constant配置"},
        {"quest":"接受参数-action","anser":"直接用javaBeans创建字段就可以接受"},
        {"quest":"接受参数-ModelDriven","anser":"继承modelDriven"},


    ]
