(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{605:function(_,i,v){"use strict";v.r(i);var l=v(5),t=Object(l.a)({},(function(){var _=this,i=_.$createElement,v=_._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1、css的属性的继承"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、css的属性的继承"}},[_._v("#")]),_._v(" 1、CSS的属性的继承")]),_._v(" "),v("h3",{attrs:{id:"_1-1-css的某些属性具有继承性-inherited"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-css的某些属性具有继承性-inherited"}},[_._v("#")]),_._v(" 1.1.CSS的某些属性具有继承性(Inherited):")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("如果一个属性具备继承性, 那么在该元素上设置后, 它的后代元素都可以继承这个属性;")])]),_._v(" "),v("li",[v("p",[_._v("当然, 如果后代元素自己有设置该属性, 那么优先使用后代元素自己的属性(不管继承过来的属性权重多高);")])])]),_._v(" "),v("h3",{attrs:{id:"_1-2-如何知道一个属性是否具有继承性呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-如何知道一个属性是否具有继承性呢"}},[_._v("#")]),_._v(" 1.2.如何知道一个属性是否具有继承性呢?")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("常见的font-size/font-family/font-weight/line-height/color/text-align/cursor等都具有继承性;")])]),_._v(" "),v("li",[v("p",[_._v("这些不用刻意去记, 用的多自然就记住了; 忘记了可以直接官网去查："),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color",target:"_blank",rel:"noopener noreferrer"}},[_._v("以background-color为例：概览里面有一个是否是继承属性：否"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[_._v("注意(了解):继承过来的是"),v("strong",[_._v("计算值")]),_._v(", 而不是"),v("strong",[_._v("设置值")])])])]),_._v(" "),v("h2",{attrs:{id:"_2、css属性的层叠及选择器的权重"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、css属性的层叠及选择器的权重"}},[_._v("#")]),_._v(" 2、CSS属性的层叠及选择器的权重")]),_._v(" "),v("h3",{attrs:{id:"_2-1-css属性的层叠"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-css属性的层叠"}},[_._v("#")]),_._v(" 2.1.CSS属性的层叠")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("CSS的翻译是层叠样式表, 什么是层叠呢?")]),_._v(" "),v("ul",[v("li",[_._v("对于一个元素来说, 相同一个属性我们可以通过不同的选择器给它进行多次设置;")]),_._v(" "),v("li",[_._v("那么属性会被一层层覆盖上去;")]),_._v(" "),v("li",[_._v("但是最终只有一个会生效;")])])]),_._v(" "),v("li",[v("p",[_._v("那么多个样式属性覆盖上去, 哪一个会生效呢?")]),_._v(" "),v("ul",[v("li",[_._v("判断一: 选择器的权重, 权重大的生效, 根据权重可以判断出优先级;")]),_._v(" "),v("li",[_._v("判断二: 先后顺序, 权重相同时, 后面设置的生效;")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-2-选择器的权重"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-选择器的权重"}},[_._v("#")]),_._v(" 2.2.选择器的权重")]),_._v(" "),v("ul",[v("li",[_._v("按照经验，为了方便比较CSS属性的优先级，可以给CSS属性所处的环境定义一个权值（权重）\n"),v("ul",[v("li",[_._v("!important：10000")]),_._v(" "),v("li",[_._v("内联样式：1000")]),_._v(" "),v("li",[_._v("id选择器：100")]),_._v(" "),v("li",[_._v("类选择器，属性选择器，伪类：10")]),_._v(" "),v("li",[_._v("元素选择器，伪元素：1")]),_._v(" "),v("li",[_._v("通配选择器*：0")])])]),_._v(" "),v("li",[_._v("选择器权重的累加(补充)：例子如下\n"),v("ul",[v("li",[_._v("h1："),v("strong",[_._v("优先级为1")])]),_._v(" "),v("li",[_._v("h1 + p::first-letter："),v("strong",[_._v("优先级为3")])]),_._v(" "),v("li",[_._v('li > a[href="en-US"]  > .warning：'),v("strong",[_._v("优先级为22")])])])])]),_._v(" "),v("h2",{attrs:{id:"_3、display属性的学习及编写html注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、display属性的学习及编写html注意事项"}},[_._v("#")]),_._v(" 3、display属性的学习及编写HTML注意事项")]),_._v(" "),v("h3",{attrs:{id:"_3-1-html元素的类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-html元素的类型"}},[_._v("#")]),_._v(" 3.1.HTML元素的类型")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("块级元素")]),_._v("（block-level elements）: 独占父元素的一行（浏览器默认给它们加上了display:block;属性）")]),_._v(" "),v("ul",[v("li",[_._v("块级元素如：div，p，h1~h6等")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("行内级元素")]),_._v("（inline-level elements）:多个行内级元素可以在父元素的同一行中显示（浏览器默认没有加任何属性，相当为display:inline;）")]),_._v(" "),v("ul",[v("li",[_._v("行内可替换元素：img，input，audio等")]),_._v(" "),v("li",[_._v("行内非替换元素：span，a，i，strong等")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("结论")]),_._v("：我们可以通过display来改变元素的特性（类型）；")]),_._v(" "),v("p",[_._v("如将span的css属性display改成：display:block;这样span就变成了一个块级元素")])])]),_._v(" "),v("h3",{attrs:{id:"_3-2-css属性-display的学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-css属性-display的学习"}},[_._v("#")]),_._v(" 3.2.CSS属性 - display的学习")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("block元素")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("独占父元素的一行")]),_._v(" "),v("li",[_._v("可以随意设置宽高；设置后依然独占一行，剩余会分给margin")]),_._v(" "),v("li",[_._v("高度默认由内容决定")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("inline-block元素")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("跟其他行内级元素在同一行显示")]),_._v(" "),v("li",[_._v("可以随意设置宽高；")]),_._v(" "),v("li",[_._v("可以这样理解\n"),v("ul",[v("li",[_._v("对外来说，它是一个行内级元素")]),_._v(" "),v("li",[_._v("对内来说，它是一个块级元素")])])])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("inline元素")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("跟其他行内级元素在同一行显示;")]),_._v(" "),v("li",[_._v("不可以随意设置宽高;")]),_._v(" "),v("li",[_._v("宽高都由内容决定;")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-3-编写html时的注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-编写html时的注意事项"}},[_._v("#")]),_._v(" 3.3.编写HTML时的注意事项")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("块级元素、inline-block元素")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("一般情况下，可以包含其他任何元素（比如块级元素、行内级元素、inline-block元素）")])]),_._v(" "),v("li",[v("p",[_._v("特殊情况，p元素不能包含其他块级元素;")])])]),_._v(" "),v("p",[_._v("如：p元素包含div元素 浏览器解析HTML结构时，解析会有问题；")])]),_._v(" "),v("li",[v("p",[_._v("行内级元素（比如a、span、strong等）")]),_._v(" "),v("ul",[v("li",[_._v("一般情况下，只能包含行内级元素")])])])]),_._v(" "),v("h2",{attrs:{id:"_4、元素隐藏方法及学习overflow属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、元素隐藏方法及学习overflow属性"}},[_._v("#")]),_._v(" 4、元素隐藏方法及学习overflow属性")]),_._v(" "),v("h3",{attrs:{id:"_4-1-元素隐藏方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-元素隐藏方法"}},[_._v("#")]),_._v(" 4.1.元素隐藏方法")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("方法一: display设置为none**(元素不显示出来,元素不占据任何位置空间)**")]),_._v(" "),v("ul",[v("li",[_._v("元素不显示出来, 并且也不占据位置, 不占据任何空间(和不存在一样);")])])]),_._v(" "),v("li",[v("p",[_._v("方法二: visibility设置为hidden**(元素不可见,元素占据应该占据的空间)**")]),_._v(" "),v("ul",[v("li",[_._v("设置为hidden, 虽然元素不可见, 但是会占据元素应该占据的空间;")]),_._v(" "),v("li",[_._v("默认为visible, 元素是可见的;")])])]),_._v(" "),v("li",[v("p",[_._v("方法三: rgba设置颜色, 将a的值设置为0 "),v("strong",[_._v("(元素不可见,只是设置透明度:元素占据应该占据的空间)")])]),_._v(" "),v("ul",[v("li",[_._v("rgba的a设置的是alpha值, 可以设置透明度, 不影响子元素;")])])]),_._v(" "),v("li",[v("p",[_._v("方法四: opacity设置透明度, 设置为0  "),v("strong",[_._v("(元素不可见,只是设置透明度:元素占据应该占据的空间)")])]),_._v(" "),v("ul",[v("li",[_._v("设置整个元素的透明度, 会影响所有的子元素;")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-2-css属性-overflow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-css属性-overflow"}},[_._v("#")]),_._v(" 4.2.CSS属性 - overflow")]),_._v(" "),v("ul",[v("li",[_._v("overflow用于控制内容溢出时的行为\n"),v("ul",[v("li",[_._v("visible(默认值)：溢出的内容照样可见")]),_._v(" "),v("li",[_._v("hidden：溢出的内容直接裁剪")]),_._v(" "),v("li",[_._v("scroll：溢出的内容被裁剪，但可以通过滚动机制查看\n"),v("ul",[v("li",[_._v("会一直显示滚动条区域，滚动条区域占用的空间属于width、height")])])]),_._v(" "),v("li",[_._v("auto：自动根据内容是否溢出来决定是否提供滚动机制")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-3-开发中的css样式不生效技巧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-开发中的css样式不生效技巧"}},[_._v("#")]),_._v(" 4.3.开发中的CSS样式不生效技巧")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("为何有时候编写的CSS属性不好使，有可能是因为")]),_._v(" "),v("ul",[v("li",[_._v("选择器的优先级太低")]),_._v(" "),v("li",[_._v("选择器没选中对应的元素")]),_._v(" "),v("li",[_._v("CSS属性的使用形式不对\n"),v("ul",[v("li",[_._v("元素不支持此CSS属性，比如span默认是不支持width和height的")]),_._v(" "),v("li",[_._v("浏览器不支持此CSS属性，比如旧版本的浏览器不支持一些css module3的某些属性")]),_._v(" "),v("li",[_._v("被同类型的CSS属性覆盖，比如font覆盖font-size")])])])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("建议")]),_._v("：充分利用浏览器的开发者工具进行调试（增加、修改样式）、查错")])])]),_._v(" "),v("h2",{attrs:{id:"_5、css盒子模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、css盒子模型"}},[_._v("#")]),_._v(" 5、CSS盒子模型")]),_._v(" "),v("h3",{attrs:{id:"_5-1-盒子模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-盒子模型"}},[_._v("#")]),_._v(" 5.1.盒子模型")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("HTML中的每一个元素都可以看做是一个盒子，如下图所示，可以具备这4个属性")])]),_._v(" "),v("li",[v("p",[_._v("内容（content）")]),_._v(" "),v("ul",[v("li",[_._v("元素的内容width/height")])])]),_._v(" "),v("li",[v("p",[_._v("内边距（padding）")]),_._v(" "),v("ul",[v("li",[_._v("元素和内容之间的间距")])])]),_._v(" "),v("li",[v("p",[_._v("边框（border）")]),_._v(" "),v("ul",[v("li",[_._v("元素自己的边框")])])]),_._v(" "),v("li",[v("p",[_._v("外边距（margin）")]),_._v(" "),v("ul",[v("li",[_._v("元素和其他元素之间的间距")])])]),_._v(" "),v("li",[v("p",[_._v("因为盒子有四边, 所以margin/padding/border都包括top/right/bottom/left四个边:")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://s1.ax1x.com/2022/04/20/LsLAyj.png",alt:"LsLAyj.png"}})]),_._v(" "),v("h3",{attrs:{id:"_5-2-内容-宽度和高度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-内容-宽度和高度"}},[_._v("#")]),_._v(" 5.2.内容 – 宽度和高度")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("设置内容是通过宽度和高度设置的:")]),_._v(" "),v("ul",[v("li",[_._v("宽度设置: width")]),_._v(" "),v("li",[_._v("高度设置: height")])])]),_._v(" "),v("li",[v("p",[_._v("注意: 对于行内级非替换元素来说, 设置宽高是无效的!")])]),_._v(" "),v("li",[v("p",[_._v("另外我们还可以设置如下属性:")]),_._v(" "),v("ul",[v("li",[_._v("min-width：最小宽度，无论内容多少，宽度都大于或等于min-width")]),_._v(" "),v("li",[_._v("max-width：最大宽度，无论内容多少，宽度都小于或等于max-width")]),_._v(" "),v("li",[_._v("移动端适配时, 可以设置最大宽度和最小宽度;")])])]),_._v(" "),v("li",[v("p",[_._v("下面两个属性不常用:")]),_._v(" "),v("ul",[v("li",[_._v("min-height：最小高度，无论内容多少，高度都大于或等于min-height")]),_._v(" "),v("li",[_._v("max-height：最大高度，无论内容多少，高度都小于或等于max-height")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-3-内边距-padding"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-内边距-padding"}},[_._v("#")]),_._v(" 5.3.内边距 - padding")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("padding属性用于设置盒子的内边距, 通常用于设置边框和内容之间的间距;")])]),_._v(" "),v("li",[v("p",[_._v("padding包括四个方向, 所以有如下的取值:")]),_._v(" "),v("ul",[v("li",[_._v("padding-top：上内边距")]),_._v(" "),v("li",[_._v("padding-right：右内边距")]),_._v(" "),v("li",[_._v("padding-bottom：下内边距")]),_._v(" "),v("li",[_._v("padding-left：左内边距")])])]),_._v(" "),v("li",[v("p",[_._v("padding单独编写是一个缩写属性：")]),_._v(" "),v("ul",[v("li",[_._v("padding-top、padding-right、padding-bottom、padding-left的简写属性")]),_._v(" "),v("li",[_._v("padding缩写属性是从零点钟方向开始, 沿着顺时针转动的, 也就是上右下左;")])])]),_._v(" "),v("li",[v("p",[_._v("padding并非必须是四个值, 也可以有其他值（1~4个值）;")]),_._v(" "),v("ul",[v("li",[_._v("4个值：上 右 下 左；如:padding:10px 20px 30px  40px ;")]),_._v(" "),v("li",[_._v("3个值：上 右左 下；如:padding:10px 20px 30px ;")]),_._v(" "),v("li",[_._v("2个值：上下 右左；如:padding:10px 20px;")]),_._v(" "),v("li",[_._v("1个值：上下右左都用1个值；如:padding:10px;")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-4-圆角-border-radius"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-圆角-border-radius"}},[_._v("#")]),_._v(" 5.4.圆角 – border-radius")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("border这里咱们就不说啦，可以看该网址学习："),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/border",target:"_blank",rel:"noopener noreferrer"}},[_._v("border的学习"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[_._v("border-radius用于设置盒子的圆角")])]),_._v(" "),v("li",[v("p",[_._v("border-radius常见的值:")]),_._v(" "),v("ul",[v("li",[_._v("数值: 通常用来设置小的圆角, 比如6px;")]),_._v(" "),v("li",[_._v("百分比: 通常用来设置一定的弧度或者圆形;")])])]),_._v(" "),v("li",[v("p",[_._v("border-radius事实上是一个缩写属性:")]),_._v(" "),v("ul",[v("li",[_._v("将这四个属性 border-top-left-radius、border-top-right-radius、border-bottom-right-radius，和 border-bottom-left-radius 简写为一个属性。")]),_._v(" "),v("li",[_._v("开发中比较少见一个个圆角设置;")])])]),_._v(" "),v("li",[v("p",[_._v("如果一个元素是正方形, 设置border-radius大于或等于50%时，就会变成一个圆.")])])]),_._v(" "),v("h3",{attrs:{id:"_5-5-外边距-margin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-外边距-margin"}},[_._v("#")]),_._v(" 5.5.外边距 - margin")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("margin属性用于设置盒子的外边距, 通常用于元素和元素之间的间距;")])]),_._v(" "),v("li",[v("p",[_._v("margin包括四个方向, 所以有如下的取值:")]),_._v(" "),v("ul",[v("li",[_._v("margin-top：上内边距")]),_._v(" "),v("li",[_._v("margin-right：右内边距")]),_._v(" "),v("li",[_._v("margin-bottom：下内边距")]),_._v(" "),v("li",[_._v("margin-left：左内边距")])])]),_._v(" "),v("li",[v("p",[_._v("margin单独编写是一个缩写属性：")]),_._v(" "),v("ul",[v("li",[_._v("margin-top、margin-right、margin-bottom、margin-left的简写属性")]),_._v(" "),v("li",[_._v("margin缩写属性是从零点钟方向开始, 沿着顺时针转动的, 也就是上右下左;")])])]),_._v(" "),v("li",[v("p",[_._v("margin也并非必须是四个值, 也可以有其他值（1~4个值）;(跟上面5.3讲的padding一样)")])])]),_._v(" "),v("h3",{attrs:{id:"_5-6-上下margin的传递-块级元素之间才会有传递"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-上下margin的传递-块级元素之间才会有传递"}},[_._v("#")]),_._v(" 5.6.上下margin的传递（块级元素之间才会有传递）")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("margin-top传递")]),_._v(" "),v("ul",[v("li",[_._v("如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的margin-top值会传递给父元素")])])]),_._v(" "),v("li",[v("p",[_._v("margin-bottom传递")]),_._v(" "),v("ul",[v("li",[_._v("如果块级元素的底部线和父元素的底部线重写，并且父元素的高度是auto，那么这个块级元素的margin-bottom值会传递给父元素")])])]),_._v(" "),v("li",[v("p",[_._v("如何防止出现传递问题？")]),_._v(" "),v("ul",[v("li",[_._v("给父元素设置padding-top\\padding-bottom")]),_._v(" "),v("li",[_._v("给父元素设置border")]),_._v(" "),v("li",[_._v("触发BFC: 给父元素设置overflow为auto")])])]),_._v(" "),v("li",[v("p",[_._v("建议")]),_._v(" "),v("ul",[v("li",[_._v("margin一般是用来设置兄弟元素之间的间距")]),_._v(" "),v("li",[_._v("padding一般是用来设置父子元素之间的间距")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-7-上下margin的折叠-块级元素之间才会有折叠"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-上下margin的折叠-块级元素之间才会有折叠"}},[_._v("#")]),_._v(" 5.7.上下margin的折叠（块级元素之间才会有折叠）")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("两个块级元素垂直方向上相邻的2个margin（margin-top、margin-bottom）有可能会合并为1个margin，这种现象叫做collapse（折叠）")])]),_._v(" "),v("li",[v("p",[_._v("水平方向上的margin（margin-left、margin-right）永远不会collapse")])]),_._v(" "),v("li",[v("p",[_._v("折叠后最终值的计算规则")]),_._v(" "),v("ul",[v("li",[_._v("两个值进行比较，取较大的值")])])]),_._v(" "),v("li",[v("p",[_._v("如何防止margin collapse？")]),_._v(" "),v("ul",[v("li",[_._v("只设置其中一个元素的margin")])])]),_._v(" "),v("li",[v("p",[_._v("上下margin折叠的情况")]),_._v(" "),v("ul",[v("li",[_._v("两个兄弟块级元素之间上下margin的折叠")]),_._v(" "),v("li",[_._v("父子块级元素之间margin的折叠")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-8-外轮廓-outline"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-外轮廓-outline"}},[_._v("#")]),_._v(" 5.8.外轮廓 - outline")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("outline表示元素的外轮廓")]),_._v(" "),v("ul",[v("li",[_._v("不占用空间")]),_._v(" "),v("li",[_._v("默认显示在border的外面")])])]),_._v(" "),v("li",[v("p",[_._v("outline相关属性有")]),_._v(" "),v("ul",[v("li",[_._v("outline-width: 外轮廓的宽度")]),_._v(" "),v("li",[_._v("outline-style：取值跟border的样式一样，比如solid、dotted等")]),_._v(" "),v("li",[_._v("outline-color: 外轮廓的颜色")]),_._v(" "),v("li",[_._v("outline：outline-width、outline-style、outline-color的简写属性，跟border用法类似")])])]),_._v(" "),v("li",[v("p",[_._v("应用实例")]),_._v(" "),v("ul",[v("li",[_._v("去除a元素、input元素的focus轮廓效果：设置outline:none;即可")])])])]),_._v(" "),v("h2",{attrs:{id:"_6、盒子阴影box-shadow和文字阴影text-shadow和box-sizing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、盒子阴影box-shadow和文字阴影text-shadow和box-sizing"}},[_._v("#")]),_._v(" 6、盒子阴影box-shadow和文字阴影text-shadow和box-sizing")]),_._v(" "),v("h3",{attrs:{id:"_6-1-盒子阴影-box-shadow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-盒子阴影-box-shadow"}},[_._v("#")]),_._v(" 6.1.盒子阴影 – box-shadow")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("box-shadow属性可以设置一个或者多个阴影")]),_._v(" "),v("ul",[v("li",[_._v("每个阴影用< shadow >表示")]),_._v(" "),v("li",[_._v("多个阴影之间用逗号,隔开，从前到后叠加")])])]),_._v(" "),v("li",[v("p",[_._v("< shadow >的常见格式如下")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("语法：none | <shadow>#  //值为none或者为<shadow>\n\n<shadow> = inset? && <length>{2,4} && <color>?  \n//例如：box-shadow:1px 2px 3px 4px rgba(0,0,0,.6) inset\n//inset跟color可设置可不设置；且可以跟 <length>{2,4}随便排列；但是必须设置2~4个<length>\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br")])]),v("ul",[v("li",[_._v("第1个< length >：offset-x, 水平方向的偏移，正数往右偏移")]),_._v(" "),v("li",[_._v("第2个< length >：offset-y, 垂直方向的偏移，正数往下偏移")]),_._v(" "),v("li",[_._v("第3个< length >：blur-radius, 模糊半径")]),_._v(" "),v("li",[_._v("第4个< length >：spread-radius, 延伸半径")]),_._v(" "),v("li",[_._v("< color >：阴影的颜色，如果没有设置，就跟随color属性的颜色")]),_._v(" "),v("li",[_._v("inset：外框阴影变成内框阴影")]),_._v(" "),v("li",[_._v("我们可以通过一个网站测试盒子的阴影: "),v("a",{attrs:{href:"https://html-css-js.com/css/generator/box-shadow/",target:"_blank",rel:"noopener noreferrer"}},[_._v("在线测试阴影并提取"),v("OutboundLink")],1)])])])]),_._v(" "),v("h3",{attrs:{id:"_6-2-文字阴影-text-shadow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-文字阴影-text-shadow"}},[_._v("#")]),_._v(" 6.2.文字阴影 - text-shadow")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("text-shadow用法类似于box-shadow，用于给文字添加阴影效果")])]),_._v(" "),v("li",[v("p",[_._v("< shadow >的常见格式如下")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("none | <shadow-t>#where \n<shadow-t> = [ <length>{2,3} && <color>? ]\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br")])]),v("ul",[v("li",[_._v("相当于box-shadow, 它没有spread-radius的值（及第四个值：延伸半径）;  也没有inset外框阴影变成内框阴影这个值")]),_._v(" "),v("li",[_._v("我们可以通过一个网站测试文字的阴影:  "),v("a",{attrs:{href:"https://html-css-js.com/css/generator/text-shadow/",target:"_blank",rel:"noopener noreferrer"}},[_._v("在线测试阴影并提取"),v("OutboundLink")],1)])])])]),_._v(" "),v("h3",{attrs:{id:"_6-3-行内非替换元素的注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-行内非替换元素的注意事项"}},[_._v("#")]),_._v(" 6.3.行内非替换元素的注意事项")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("a,span,i,strong等元素为行内级非替换元素")])]),_._v(" "),v("li",[v("p",[_._v("以下属性对行内级非替换元素不起作用")]),_._v(" "),v("ul",[v("li",[_._v("width、height、margin-top、margin-bottom")])])]),_._v(" "),v("li",[v("p",[_._v("以下属性对行内级非替换元素的效果比较特殊")]),_._v(" "),v("ul",[v("li",[_._v("padding-top、padding-bottom、border-top，border-bottom（给行内级非替换元素设置这些属性，也不起作用；  但是呢当你给 行内级非替换元素设置了背景颜色时，他们会显示颜色，但是不会占据空间）")])])]),_._v(" "),v("li",[v("p",[_._v("margin-left，margin-right，padding-left，padding-right，border-left，border-right这些属性对行内级非替换元素起作用")])])]),_._v(" "),v("h3",{attrs:{id:"_6-4-css属性-box-sizing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-css属性-box-sizing"}},[_._v("#")]),_._v(" 6.4.CSS属性 - box-sizing")]),_._v(" "),v("ul",[v("li",[_._v("box-sizing用来设置盒子模型中宽高的行为\n"),v("ul",[v("li",[_._v("content-box（默认值）：padding、border都布置在width、height外边")]),_._v(" "),v("li",[_._v("border-box： padding、border都布置在width、height里边（在一定的设置值内:具体看盒子的大小； 设置padding跟border不会影响盒子整理的大小）")]),_._v(" "),v("li",[_._v("注意：W3C标准盒子模型默认不会跟盒子设置box-sizing:border-box;而IE盒子模型（IE8以下浏览器）会默认给盒子都设置box-sizing:border-box;")])])])]),_._v(" "),v("h3",{attrs:{id:"_6-5-元素的水平居中方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-元素的水平居中方案"}},[_._v("#")]),_._v(" 6.5.元素的水平居中方案")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("在一些需求中，需要元素在父元素中水平居中显示（父元素一般都是块级元素、inline-block）")])]),_._v(" "),v("li",[v("p",[_._v("行内级元素(包括inline-block元素)")]),_._v(" "),v("ul",[v("li",[_._v("水平居中：在父元素中设置text-align: center;")])])]),_._v(" "),v("li",[v("p",[_._v("块级元素")]),_._v(" "),v("ul",[v("li",[_._v("水平居中：给自己设置margin: 0 auto;")])])])])])}),[],!1,null,null,null);i.default=t.exports}}]);