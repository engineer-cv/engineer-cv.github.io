(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{616:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1、javascript中的运算符和-运算元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、javascript中的运算符和-运算元"}},[t._v("#")]),t._v(" 1、JavaScript中的运算符和(运算元)")]),t._v(" "),a("h3",{attrs:{id:"_1-1-认识运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-认识运算符"}},[t._v("#")]),t._v(" 1.1.认识运算符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在小学的时候我们就学习了各种运算符，比如加号 +、乘号 *、减号 - 、除号/")])]),t._v(" "),a("li",[a("p",[t._v("几乎所有的编程语言都有各种各样的运算符(也被称之为操作符，operators)")]),t._v(" "),a("ul",[a("li",[t._v("初次接触这些运算符, 你会感觉种类繁多, 难以记忆.")]),t._v(" "),a("li",[t._v("但是并不需要特别担心, 因为很多的运算符我们在以后的开发中, 每天都会使用；")]),t._v(" "),a("li",[t._v("多练习, 不需要刻意去记忆；")]),t._v(" "),a("li",[t._v("而且常见的高级语言运算符都是相似的，学了JavaScript运算符很容易掌握C/C++/OC/Python等语言的运算符；")])])]),t._v(" "),a("li",[a("p",[t._v("计算机最基本的操作就是执行运算，执行运算时就需要使用运算符来操作：")]),t._v(" "),a("ul",[a("li",[t._v("比如 console.log(20 + 30); "),a("code",[t._v("+")]),t._v("号就是一个运算符.")]),t._v(" "),a("li",[t._v("比如 console.log(20 * 30); "),a("code",[t._v("*")]),t._v("号也是一个运算符.")])])]),t._v(" "),a("li",[a("p",[t._v("JavaScript按照使用场景的不同将运算符分成了很多种类型：")]),t._v(" "),a("ul",[a("li",[t._v("算术运算符：+，-，*，/，%，**，等")]),t._v(" "),a("li",[t._v("字符串运算符：+； 连接两个字符串")]),t._v(" "),a("li",[t._v("赋值运算符：=，+=，-=，*=，/=，%=，等")]),t._v(" "),a("li",[t._v("关系(比较)运算符：>，<，>=，<=，==，!=，==，!==，等")]),t._v(" "),a("li",[t._v("逻辑运算符：||，&&，!，等")]),t._v(" "),a("li",[t._v("等运算符")]),t._v(" "),a("li",[t._v("具体JavaScript中的所有运算符可参考该文章： "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdn文档"),a("OutboundLink")],1),t._v("  或   "),a("a",{attrs:{href:"https://www.cnblogs.com/mijuntao/p/15043083.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript运算符"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-认识运算元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-认识运算元"}},[t._v("#")]),t._v(" 1.2.认识运算元")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在正式开始运算之前，我们先学习一下常见的术语：")]),t._v(" "),a("ul",[a("li",[t._v("运算元 ——运算符应用的对象。\n"),a("ul",[a("li",[t._v("比如说乘法运算 5 * 2，有两个运算元；")]),t._v(" "),a("li",[t._v("左运算元 5 和右运算元 2；")]),t._v(" "),a("li",[t._v("有时候人们也称其为“参数”；")])])]),t._v(" "),a("li",[t._v("如果一个运算符对应的只有一个运算元，那么它是 一元运算符。\n"),a("ul",[a("li",[t._v("比如说一元负号运算符（unary negation）-，它的作用是对数字进行正负转换；")])])]),t._v(" "),a("li",[t._v("如果一个运算符拥有两个运算元，那么它是 二元运算符。\n"),a("ul",[a("li",[t._v("比如 2 + 3")])])])])]),t._v(" "),a("li",[a("p",[t._v("一元运算符通常我们是使用 – 和 +，-号使用的会较多一些；")])])]),t._v(" "),a("h3",{attrs:{id:"_1-3-算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-算术运算符"}},[t._v("#")]),t._v(" 1.3.算术运算符")]),t._v(" "),a("ul",[a("li",[t._v("算术运算符用在数学表达式中, 它的使用方式和数学中也是一直的；")]),t._v(" "),a("li",[t._v("算术运算符是对数据进行计算的符号；")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("运算符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("运算规则")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("范例")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("加法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2+3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("连接字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'Hello'+'china'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'Hellochina'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("减法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2-3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("乘法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2*3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("除法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5/2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取余数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5%2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("**")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("幂（ES7新增）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5**2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("25")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("取余 % 和 求幂")]),t._v(" "),a("ul",[a("li",[t._v("取余运算符是 %，尽管它看起来很像百分数，但实际并无关联\n"),a("ul",[a("li",[t._v("a % b 的结果是 a 整除 b 的 余数")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("求幂运算 a ** b 将 a 提升至 a 的 b 次幂。（ES7中的语法，也叫做ES2016）\n"),a("ul",[a("li",[t._v("在数学中我们将其表示为 a的b次方。")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_1-4-赋值运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-赋值运算符"}},[t._v("#")]),t._v(" 1.4.赋值运算符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("前面我们使用的= 其实也是一个运算符，被称之为赋值（ assignments ）运算符。")])]),t._v(" "),a("li",[a("p",[t._v("= 是一个运算符，而不是一个有着“魔法”作用的语言结构。")])]),t._v(" "),a("li",[a("p",[t._v("语句 x = value 将值 value 写入 x 然后返回 x。")])]),t._v(" "),a("li",[a("p",[t._v("链式赋值（Chaining assignments）")]),t._v(" "),a("ul",[a("li",[t._v("链式赋值从右到左进行计算；")]),t._v(" "),a("li",[t._v("首先，对最右边的表达式 2 + 2 求值，然后将其赋给左边的变量：c、b 和 a。")]),t._v(" "),a("li",[t._v("最后，所有的变量共享一个值。")]),t._v(" "),a("li",[t._v("但是从代码的可读性的角度来说，不推荐这种写法。如下")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4 4 4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("原地修改（Modify-in-place）\n"),a("ul",[a("li",[t._v("什么是原地修改呢？：我们经常需要对一个变量做运算，并将新的结果存储在同一个变量中。")]),t._v(" "),a("li",[t._v("可以使用运算符 += 和 *= 来缩写这种表示。")]),t._v(" "),a("li",[t._v("所有算术和位运算符都有简短的“修改并赋值”运算符：/= 和 -= 等。")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("运算符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("运算规则")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("范例")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a=5,")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("加后赋值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a=5,a+=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("减后赋值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a=5,a-=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("乘后赋值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a=5,a*=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("除后赋值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a=5,a/=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取模 (余数)后赋值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a=5,a%=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("**")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("幂后赋值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a=5,a**=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("25")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-5-自增-、自减"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-自增-、自减"}},[t._v("#")]),t._v(" 1.5.自增(++)、自减(--)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对一个数进行加一、减一是最常见的数学运算符之一。")])]),t._v(" "),a("li",[a("p",[t._v("所以，对此有一些专门的运算符：")]),t._v(" "),a("ul",[a("li",[t._v("自增 ++ 将变量加1；")]),t._v(" "),a("li",[t._v("自减 -- 将变量减1；")])])]),t._v(" "),a("li",[a("p",[t._v("自增/自减只能应用于变量。")]),t._v(" "),a("ul",[a("li",[t._v("将其应用于数值（比如 5++）则会报错。")])])]),t._v(" "),a("li",[a("p",[t._v("++和--的位置")]),t._v(" "),a("ul",[a("li",[t._v("运算符 ++ 和 -- 可以置于变量前，也可以置于变量后。\n"),a("ul",[a("li",[t._v("当运算符置于变量后，被称为“后置形式”（postfix form）：counter++。")]),t._v(" "),a("li",[t._v("当运算符置于变量前，被称为“前置形式”（prefix form）：++counter。")]),t._v(" "),a("li",[t._v("两者都做同一件事：将变量 counter 与 1 相加。")])])]),t._v(" "),a("li",[t._v("他们有什么区别吗？\n"),a("ul",[a("li",[t._v("有，但只有当我们使用 ++/-- 的返回值时才能看到区别；")]),t._v(" "),a("li",[t._v("如果自增/自减的值不会被使用，那么两者形式没有区别；")]),t._v(" "),a("li",[t._v("如果我们想要对变量进行自增操作，并且 需要立刻使用自增后的值，那么我们需要使用前置形式；")]),t._v(" "),a("li",[t._v("前置形式返回一个新的值，但后置返回原来的值；")])])])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//6 17  自增自减的值被使用的时候（有区别）")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//7 17   自增自减的值不被使用的时候（无区别）")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_1-6-比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-比较运算符"}},[t._v("#")]),t._v(" 1.6.比较运算符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("我们知道，在数学中有很多用于比较大小的运算符，在JavaScript中也有相似的比较：")]),t._v(" "),a("ul",[a("li",[t._v("大于 / 小于：a > b，a < b。")]),t._v(" "),a("li",[t._v("大于等于 / 小于等于：a >= b，a <= b。")]),t._v(" "),a("li",[t._v("检查两个值的相等：a == b，请注意双等号 == 表示相等性检查，而单等号 a = b 表示赋值。")]),t._v(" "),a("li",[t._v("检查两个值不相等：不相等在数学中的符号是 ≠，但在 JavaScript 中写成 a != b。")])])]),t._v(" "),a("li",[a("p",[t._v("比较运算符的结果都是Boolean类型的")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("运算符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("运算规则")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("范例")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("==")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("相等")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3==2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("!=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3!=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3>2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("<")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("小于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3<2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(">=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大于等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3>=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("<=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("小于等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3<=2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-7-和-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-和-的区别"}},[t._v("#")]),t._v(" 1.7.=== 和 == 的区别")]),t._v(" "),a("ul",[a("li",[t._v("普通的相等性检查 == 存在一个问题，它不能区分出 0 和 false，或者空字符串和 false这类运算：\n"),a("ul",[a("li",[t._v("这是因为在比较不同类型的值时，处于判断符号 == 两侧的值会先被转化为数字；")]),t._v(" "),a("li",[t._v("空字符串和 false 也是如此，转化后它们都为数字 0；")])])]),t._v(" "),a("li",[t._v("如果我们需要区分 0 和 false，该怎么办？\n"),a("ul",[a("li",[t._v("严格相等运算符 === 在进行比较时不会做任何的类型转换；")]),t._v(" "),a("li",[t._v("换句话说，如果 a 和 b 属于不同的数据类型，那么 a === b 不会做任何的类型转换而立刻返回 false；")])])]),t._v(" "),a("li",[t._v("同样的，“不相等”符号 != 类似，“严格不相等”表示为 !==。")]),t._v(" "),a("li",[t._v("严格相等的运算符虽然写起来稍微长一些，但是它能够很清楚地显示代码意图，降低你犯错的可能性。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_1-8-运算符优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-运算符优先级"}},[t._v("#")]),t._v(" 1.8.运算符优先级")]),t._v(" "),a("ul",[a("li",[t._v("运算符放到一起使用时会有一定的优先级：")]),t._v(" "),a("li",[t._v("在MDN上给出了所有运算符的优先级（不用去记）"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",target:"_blank",rel:"noopener noreferrer"}},[t._v("运算符优先级"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_2、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、"}},[t._v("#")]),t._v(" 2、")]),t._v(" "),a("h2",{attrs:{id:"_3、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、"}},[t._v("#")]),t._v(" 3、")]),t._v(" "),a("h2",{attrs:{id:"_4、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、"}},[t._v("#")]),t._v(" 4、")]),t._v(" "),a("h2",{attrs:{id:"_5、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、"}},[t._v("#")]),t._v(" 5、")])])}),[],!1,null,null,null);e.default=n.exports}}]);