var list =
    [
        {"quest":"JDBC有两部分组成","anser":"JDBC API和JDBC Driver Interface"},
        {"quest":"工作原理1","anser":"装载驱动程序：DriverManager d = Class.forName(driver).newInstance()"},
        {"quest":"工作原理2","anser":"获取数据库连接：Connection cn = d.getConnection(url,username,password)"},
        {"quest":"工作原理3","anser":"执行SQL-Statement：创建Statement sm = cn.createStatement();查询sm.executeQuery(sql);更新sm.executeUpdate(sql)"},
        {"quest":"工作原理4","anser":"事务处理：cn.setAutoCommit(false);cn.commit();cn.rollback()"},
        {"quest":"工作原理5","anser":"执行结果：ResultSet r = cn.executeQuery(sql);r.next();re.getInt('id')"},
        {"quest":"工作原理6","anser":"关闭数据库：rs.close();con.close()"},
        {"quest":"JDBC连接池","anser":"创建一个connection池，从池中得到connection,close时候交还给池"},
        {"quest":"DBCP","anser":"创建BasicDataSource dbs =new BasicDataSource();setUrl();setUsername();setPassword();getConnection()"},
        {"quest":"C3P0","anser":""},
        {"quest":"JDBC批处理1","anser":"Statement sm = cn.createStatement();sm.addBatch(sql);executeBatch();clearBatch()"},
        {"quest":"JDBC批处理2","anser":"PreparedStatement.addBatch(sql)"},
    ]
