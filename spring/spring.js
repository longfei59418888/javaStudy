var list =
    [
        {"quest":"核心容器","anser":"Core，Beans，Context，EL 模块。"},
        {"quest":"Core模块","anser":"封装了框架依赖的最底层部分。资源访问，类型转换，工具类"},
        {"quest":"Beans模块","anser":"反转控制和依赖注入(类似ng),单例模式。"},
        {"quest":"Context模块","anser":"核心接口是ApplicationContext,全局事件，生命周期等。"},
        {"quest":"AOP模块","anser":"面向方面的编程，日志记录、权限控制、性能统计等通用功能和业务逻辑分离的技术，"},
        {"quest":"Aspects模块","anser":"AspectJ提供了比Spring ASP更强大的功能"},
        {"quest":"IoC是什么","anser":"Ioc意味着将你设计好的对象交给容器控制，而不是传统的在你的对象内部直接控制"},
        {"quest":"谁控制谁，控制什么","anser":"Ioc容器来控制对象的创建，IoC 容器控制了对象，主要控制了外部资源获取（不只是对象包括比如文件等）"},
        {"quest":"为何是反转，哪些方面反转了","anser":"由容器来帮忙创建及注入依赖对象，"},
        {"quest":"IoC能做什么","anser":"由IoC容器帮对象找相应的依赖对象并注入，而不是由对象主动去找"},
        {"quest":"依赖注入","anser":"组件之间依赖关系由容器在运行期决定，容器动态的将某个依赖关系注入到组件之中"},
        {"quest":"谁依赖于谁","anser":"当然是应用程序依赖于IoC容器，某个组件依赖Ioc容器的对象"},
        {"quest":"为什么需要依赖","anser":"应用程序需要IoC容器来提供对象需要的外部资源"},
        {"quest":"谁注入谁","anser":"很明显是IoC容器注入应用程序某个对象，应用程序依赖的对象"},
        {"quest":"注入了什么","anser":"就是注入某个对象所需要的外部资源（包括对象、资源、常量数据）"},
    ]
var list2 =[
    {"quest":"Bean的概念","anser":"由IoC容器管理的那些组成你应用程序的对象我们就叫它Bean,Bean就是由Spring容器初始化、装配及管理的对象"},
    {"quest":"Bean的配置","anser":"Spring IoC容器目的就是管理Bean,,这些Bean将根据配置文件中的Bean定义进行创建"},
    {"quest":"Bean的配置主要包含1","anser":"定义Bean的实现类2.Bean行为定义,作用域（单例、原型创建3.说明是通过构造器还是工厂方法创建Bean"},
    {"quest":"Bean的配置主要包含2","anser":"Bean行为定义,作用域（单例、原型创建"},
    {"quest":"Bean的配置主要包含3","anser":"说明是通过构造器还是工厂方法创建Bean"},
    {"quest":"Bean的配置主要包含4","anser":"Bean之间关系定义,对其他bean的引用，也就是依赖关系定义"},
    {"quest":"Bean的配置","anser":"bean-name(名称)--class(类)--id(标识符)"},
    {"quest":"Bean的命名","anser":"每个Bean可以有一个或多个id,第一个id称为“标识符”，其余id叫做“别名”"},
    {"quest":"实例化Bean--构造函数","anser":"constructor-arg -- index(参数) -- value(值)"},
    {"quest":"实例化Bean--方法返回实例","anser":"bean -- factory-method(当前类里面的方法，该方法返回一个实例)"},
    {"quest":"实例化Bean--方法返回实例","anser":"bean -- factory-method(当前类里面的方法，该方法返回一个实例)"},
    {"quest":"实例化Bean--延迟初始化Bean","anser":"bean -- lazy-init(true)"},
    {"quest":"实例化Bean--使用depends-on","anser":"bean -- depends-on(依赖的bean完成后才实例化)"},
    {"quest":"获取bean-类名","anser":"HelloApi helloApi = beanFactory.getBean(HelloApi.class); "},
    {"quest":"获取bean-ID","anser":"HelloApi bean = beanFactory.getBean(ID, HelloApi.class); "},
    {"quest":"获取bean-name","anser":"HelloApi bean = beanFactory.getBean(name, HelloApi.class); "},
    {"quest":"获取bean-name","anser":"HelloApi bean = beanFactory.getBean(name, HelloApi.class); "},
    {"quest":"指定别名","anser":"alias -- alias(别名) -- name(名称)"},
    {"quest":"实例化对象","anser":"new 和 反射的 newInstance"},
]
var list3 =[
    {"quest":"依赖注入只是一种装配对象手段","anser":"构造器注入， setter注入， 方法注入"},
    {"quest":"构造器注入--对应的传统样子","anser":"new Person('name')"},
    {"quest":"构造器注入--根据参数索引注入","anser":"constructor-arg -- index(参数位置)  -- value(值)"},
    {"quest":"构造器注入--参数类型进行注入","anser":"constructor-arg -- type(参数的类型)  -- value(值)"},
    {"quest":"构造器注入--参数名进行注入","anser":"constructor-arg -- name(参数名称)  -- value(值)"},
    {"quest":"构造器注入--参数名进行注入","anser":"constructor-arg -- name(参数名称)  -- value(值)"},
    {"quest":"setter注入","anser":"实例好Bean后,调用Bean类的setter方法进行注入依赖"},
    {"quest":"setter注入--传统样子","anser":"Person p = new Person();p.setName('name')"},
    {"quest":"setter注入--配置","anser":"property -- name(属性名) -- value(值)"},
    {"quest":"setter注入--配置List集合","anser":"property -- name(属性名) 》 list -- value-type(类型) 》 value 》 值"},
    {"quest":"setter注入--配置Map集合","anser":"property -- name(属性名) 》 list -- value-type(类型) 》 value 》 值"},
    {"quest":"setter注入--配置集合","anser":"property -- name(属性名) 》 map -- key-type(key类型) -- value-type(值类型) 》 [key>value》 值,value》 值] "},
    {"quest":"引用bean--构造函数","anser":"constructor-arg -- index -- ref(bean名称)"},
    {"quest":"引用bean--构造函数","anser":"constructor-arg -- index 》 bean -- name -- class"},
    {"quest":"引用bean--setter方法","anser":"property -- name -- ref(bean名称)"},
    {"quest":"总结-构造器注入-简写常量","anser":"constructor-arg -- index -- value"},
    {"quest":"总结-构造器注入-全写常量","anser":"constructor-arg -- index 》 value 》 值"},
    {"quest":"总结-构造器注入-简写引用","anser":"constructor-arg -- index -- ref"},
    {"quest":"总结-构造器注入-简写引用","anser":"constructor-arg -- index 》 ref -- bean"},
    {"quest":"总结-setter-简写常量","anser":"property -- name -- value"},
    {"quest":"总结-setter-全写常量","anser":"property -- name 》 value 》 值"},
    {"quest":"总结-setter-简写引用","anser":"property -- name -- ref"},
    {"quest":"总结-setter-全写引用","anser":"property -- name 》 ref -- bean"},
    {"quest":"总结-setter-列表","anser":"property -- name 》 list/set/array -- type 》 [value,value]"},
    {"quest":"总结-setter-字典","anser":"property -- name 》 map -- key-type -- value-type 》 entry -- key --value"},
    {"quest":"总结-setter-字典","anser":"property -- name 》 map -- key-type -- value-type 》 entry -- key-ref --value-ref"},
]