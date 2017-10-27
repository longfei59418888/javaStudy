var list =
    [
        {"quest":"线程和进程","anser":"Runable,Thread(),(Runable),继承两个类，实现run()方法"},
        {"quest":"线程和进程阶段","anser":"创建(new)，就绪(start)，运行，阻塞(wait,synchronized,sleep,join)，终止"},
        {"quest":"当cpu执行线程，就绪转为运行，线程让步，运行转为就绪","anser":"yield()"},
        {"quest":"当A线程等待B线程结束执行","anser":"在A线程run()中实现B线程的join()方法"},
        {"quest":"当前线程暂停n秒执行","anser":"sleep(n)"},
        {"quest":"改变线程的优先级","anser":"setPriority()"},
        {"quest":"线程安全","anser":"cpu会对每个线程执行一段时间会还另一个"},
        {"quest":"同步方法，","anser":"在run方法前加 synchronized 关键字"},
        {"quest":"同步代码块，","anser":"synchronized(obj){},obj为要同步资源对象"},
        {"quest":"Lock对象同步锁，","anser":"lock=new ReentrantLock,lock.lock(),lock.unlock()"},
        {"quest":"当前线程立即进入到等待阻塞状态，其后面的代码不会执行","anser":"wait()"},
        {"quest":"将唤醒此同步锁对象上的一个/所有等待的线程","anser":"notify()/notifyAll()"},
    ]
