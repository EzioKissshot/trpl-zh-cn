module.exports = {
    dest: 'public',
    title: 'Rust 程序设计语言',
    description: 'rust rust程序语言设计 trpl rust入门 学习rust',
    themeConfig: {
        // displayAllHeaders: true,
        sidebarDepth: 5,
        sidebar: {
            "/": [
                {
                    title: '开始',
                    children: [
                        'foreword.md',
                        'ch00-00-introduction.md',
                        'catalog.md',
                    ]
                },
                {
                    title: '入门指南',
                    children: [
                        'ch01-00-getting-started.md',
                        'ch01-01-installation.md',
                        'ch01-02-hello-world.md',
                        'ch01-03-hello-cargo.md',
                    ]
                },
                {
                    title: '猜猜看游戏教程',
                    children: [
                        'ch02-00-guessing-game-tutorial.md'
                    ]
                },
                {
                    title: '常见编程概念',
                    children: [
                        'ch03-00-common-programming-concepts.md',
                        'ch03-01-variables-and-mutability.md',
                        'ch03-02-data-types.md',
                        'ch03-03-how-functions-work.md',
                        'ch03-04-comments.md',
                        'ch03-05-control-flow.md',
                    ]
                },
                {
                    title: '认识所有权',
                    children: [
                        'ch04-00-understanding-ownership.md',
                        'ch04-01-what-is-ownership.md',
                        'ch04-02-references-and-borrowing.md',
                        'ch04-03-slices.md',
                    ]
                },
                {
                    title: '使用结构体来组织相关联的数据',
                    children: [
                        'ch05-00-structs.md',
                        'ch05-01-defining-structs.md',
                        'ch05-02-example-structs.md',
                        'ch05-03-method-syntax.md',
                    ]
                },
                {
                    title: '枚举与模式匹配',
                    children: [
                        'ch06-00-enums.md',
                        'ch06-01-defining-an-enum.md',
                        'ch06-02-match.md',
                        'ch06-03-if-let.md',
                    ]
                },
                {
                    title: '包、crate 与模块',
                    children: [
                        'ch07-00-packages-crates-and-modules.md',
                        'ch07-01-packages-and-crates-for-making-libraries-and-executables.md',
                        'ch07-02-modules-and-use-to-control-scope-and-privacy.md',
                    ]
                },
                {
                    title: '常见集合',
                    children: [
                        'ch08-00-common-collections.md',
                        'ch08-01-vectors.md',
                        'ch08-02-strings.md',
                        'ch08-03-hash-maps.md',
                    ]
                },
                {
                    title: '错误处理',
                    children: [
                        'ch09-00-error-handling.md',
                        'ch09-01-unrecoverable-errors-with-panic.md',
                        'ch09-02-recoverable-errors-with-result.md',
                        'ch09-03-to-panic-or-not-to-panic.md',
                    ]
                },
                {
                    title: '泛型、trait 与生命周期',
                    children: [
                        'ch10-00-generics.md',
                        'ch10-01-syntax.md',
                        'ch10-02-traits.md',
                        'ch10-03-lifetime-syntax.md',
                    ]
                },
                {
                    title: '测试',
                    children: [
                        'ch11-00-testing.md',
                        'ch11-01-writing-tests.md',
                        'ch11-02-running-tests.md',
                        'ch11-03-test-organization.md',
                    ]
                },
                {
                    title: '一个 I/O 项目：构建命令行程序',
                    children: [
                        'ch12-00-an-io-project.md',
                        'ch12-01-accepting-command-line-arguments.md',
                        'ch12-02-reading-a-file.md',
                        'ch12-03-improving-error-handling-and-modularity.md',
                        'ch12-04-testing-the-librarys-functionality.md',
                        'ch12-05-working-with-environment-variables.md',
                        'ch12-06-writing-to-stderr-instead-of-stdout.md',
                    ]
                },
                {
                    title: 'Rust 中的函数式语言功能：迭代器与闭包',
                    children: [
                        'ch13-00-functional-features.md',
                        'ch13-01-closures.md',
                        'ch13-02-iterators.md',
                        'ch13-03-improving-our-io-project.md',
                        'ch13-04-performance.md',
                    ]
                },
                {
                    title: '更多关于 Cargo 和 Crates.io 的内容',
                    children: [
                        'ch14-00-more-about-cargo.md',
                        'ch14-01-release-profiles.md',
                        'ch14-02-publishing-to-crates-io.md',
                        'ch14-03-cargo-workspaces.md',
                        'ch14-04-installing-binaries.md',
                        'ch14-05-extending-cargo.md',
                    ]
                },
                {
                    title: '智能指针',
                    children: [
                        'ch15-00-smart-pointers.md',
                        'ch15-01-box.md',
                        'ch15-02-deref.md',
                        'ch15-03-drop.md',
                        'ch15-04-rc.md',
                        'ch15-05-interior-mutability.md',
                        'ch15-06-reference-cycles.md',
                    ]
                },
                {
                    title: '无畏并发',
                    children: [
                        'ch16-00-concurrency.md',
                        'ch16-01-threads.md',
                        'ch16-02-message-passing.md',
                        'ch16-03-shared-state.md',
                        'ch16-04-extensible-concurrency-sync-and-send.md',
                    ]
                },
                {
                    title: 'Rust 的面向对象编程特性',
                    children: [
                        'ch17-00-oop.md',
                        'ch17-01-what-is-oo.md',
                        'ch17-02-trait-objects.md',
                        'ch17-03-oo-design-patterns.md',
                    ]
                },
                {
                    title: '模式用来匹配值的结构',
                    children: [
                        'ch18-00-patterns.md',
                        'ch18-01-all-the-places-for-patterns.md',
                        'ch18-02-refutability.md',
                        'ch18-03-pattern-syntax.md',
                    ]
                },
                {
                    title: '高级特征',
                    children: [
                        'ch19-00-advanced-features.md',
                        'ch19-01-unsafe-rust.md',
                        'ch19-02-advanced-lifetimes.md',
                        'ch19-03-advanced-traits.md',
                        'ch19-04-advanced-types.md',
                        'ch19-05-advanced-functions-and-closures.md',
                        'ch19-06-macros.md',
                    ]
                },
                {
                    title: '最后的项目: 构建多线程 web server',
                    children: [
                        'ch20-00-final-project-a-web-server.md',
                        'ch20-01-single-threaded.md',
                        'ch20-02-multithreaded.md',
                        'ch20-03-graceful-shutdown-and-cleanup.md',
                    ]
                },
                {
                    title: '附录',
                    children: [
                        'appendix-00.md',
                        'appendix-01-keywords.md',
                        'appendix-02-operators.md',
                        'appendix-03-derivable-traits.md',
                        'appendix-04-useful-development-tools.md',
                        'appendix-05-editions.md',
                        'appendix-06-translation.md',
                        'appendix-07-nightly-rust.md',
                    ]
                },




            ]
        },
        search: false,
        searchMaxSuggestions: 10,
        smoothScroll: true
    }
}