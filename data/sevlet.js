var list =
    [
        {"quest":"实现Servlet有三种方式","anser":"实现接口Servlet接口，继承GenericServlet类，继承HttpServlet类"},
        {"quest":"Servlet和Tomcat关系","anser":"Servlet类由我们来写，但对象由服务器来创建，并且由服务器来调用相应的方法"},
        {"quest":"生命周期方法","anser":"init(ServletConfig);service(ServletRequest,ServletResponse;destroy()"},
        {"quest":"HttpServletRequest方法","anser":"String getParameter(String);String getMethod();String getHeader(String);setChraracterEncoding(String)"},
        {"quest":"HttpServletResponse方法","anser":"PrintWriter getWriter();setCharacterEncoding(String);setHeader(String,String);"},
        {"quest":"HttpServlet方法","anser":"doGet(),doPost()"},
        {"quest":"过滤器的api","anser":"过滤器的3个接口都在javax.servlet中,Filter接口，filterChain接口，filterConfig接口"},
        {"quest":"过滤器的生命周期","anser":"实例化web.xml，初始化init，实例化doFilter，销毁doStroy"},
        {"quest":"doFilter","anser":"doFilter(ServletRequest,ServletResponse s){s.sendRedirect(path)}"},
    ]
