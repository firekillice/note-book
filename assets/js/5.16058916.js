(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1338:function(t,a,s){"use strict";s.r(a);var e=s(15),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"border"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border"}},[t._v("#")]),t._v(" border")]),t._v(" "),e("p",[t._v("本章知识：")]),t._v(" "),e("ul",[e("li",[t._v("了解 border-width 属性；")]),t._v(" "),e("li",[t._v("深入了解各种 border-style 类型；")]),t._v(" "),e("li",[t._v("border 在某些背景定位需求下的妙用；")]),t._v(" "),e("li",[t._v("border 与三角等图形构建；")]),t._v(" "),e("li",[t._v("border 与透明边框；")]),t._v(" "),e("li",[t._v("如何借助 border 使用有限标签完成我们的布局。")])]),t._v(" "),e("h2",{attrs:{id:"_1-border-width-不支持百分比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-border-width-不支持百分比"}},[t._v("#")]),t._v(" 1. border-width 不支持百分比")]),t._v(" "),e("p",[e("strong",[t._v("为何不支持？")]),t._v(" 语义和使用场景决定的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(432),alt:"image-20200503194910311"}})]),t._v(" "),e("p",[t._v("拿手机和显示器边框来对比下，他们的内容边框，不会随着设备变大就按比例变大的。")]),t._v(" "),e("p",[t._v("所以不支持百分比单位；类似的还有 "),e("code",[t._v("outline、box-shadow、text-shadow")]),t._v("...")]),t._v(" "),e("h3",{attrs:{id:"支持关的键字：（ie7除外）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持关的键字：（ie7除外）"}},[t._v("#")]),t._v(" 支持关的键字：（ie7除外）")]),t._v(" "),e("ul",[e("li",[t._v("thin ： 薄薄的 1px")]),t._v(" "),e("li",[t._v("medium ：薄厚均匀 3px（默认值）")]),t._v(" "),e("li",[t._v("thick : 厚厚的 5px")])]),t._v(" "),e("p",[e("strong",[t._v("为什么 medium 是默认值 3px ，而不是常用的 1px 呢？")])]),t._v(" "),e("p",[t._v("因为 "),e("code",[t._v("border-style:double")]),t._v("至少3px 才有效果")]),t._v(" "),e("h2",{attrs:{id:"_2-深入了解各种-border-style-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-深入了解各种-border-style-类型"}},[t._v("#")]),t._v(" 2. 深入了解各种 border-style 类型")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("solid ： 实线；很熟")])]),t._v(" "),e("li",[e("p",[t._v("dashed ：虚线；")]),t._v(" "),e("p",[t._v("在 ie 和其他浏览器下兼容性有问题，边框宽高 2:1 和 3:1")])]),t._v(" "),e("li",[e("p",[t._v("dotted ： 点线，不熟但有故事")]),t._v(" "),e("p",[t._v("在 ie 和其他浏览器下兼容性有问题，小圆和小方（点的形状）\n在 ie7 和 ie8 下可以利用小圆点来实现实线的圆（利用 overflow:hiden 指显示其中一个角的圆）")])]),t._v(" "),e("li",[e("p",[t._v("double： 双线，非常不熟")])]),t._v(" "),e("li",[e("p",[t._v("inset ： 内凹，大眼瞪小眼（基本不使用）")])]),t._v(" "),e("li",[e("p",[t._v("outset ：外凹，大眼瞪小眼")])]),t._v(" "),e("li",[e("p",[t._v("groove : 沟槽，大眼瞪小眼")])]),t._v(" "),e("li",[e("p",[t._v("ridge : 山脊，大眼瞪小眼")])])]),t._v(" "),e("p",[t._v("后4个毫无价值，风格过时，各种浏览器间差异大，不兼容，")]),t._v(" "),e("h3",{attrs:{id:"dashed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dashed"}},[t._v("#")]),t._v(" dashed")]),t._v(" "),e("p",[e("img",{attrs:{src:s(433),alt:"image-20200503195329077"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(434),alt:"image-20200503195356951"}})]),t._v(" "),e("h3",{attrs:{id:"dotted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dotted"}},[t._v("#")]),t._v(" dotted")]),t._v(" "),e("p",[e("img",{attrs:{src:s(435),alt:"image-20200503195522308"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(436),alt:"image-20200503195537981"}})]),t._v(" "),e("p",[t._v("实现圆角效果")]),t._v(" "),e("p",[e("img",{attrs:{src:s(437),alt:"image-20200503195653770"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(438),alt:"image-20200503195710895"}})]),t._v(" "),e("h3",{attrs:{id:"double"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#double"}},[t._v("#")]),t._v(" double")]),t._v(" "),e("p",[e("img",{attrs:{src:s(439),alt:"image-20200503195815556"}})]),t._v(" "),e("p",[t._v("它的线计算规则如下，并且 "),e("strong",[t._v("双线宽度永远相等，中间间隔±1")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(440),alt:"image-20200503195958611"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(441),alt:"image-20200503200051858"}})]),t._v(" "),e("h3",{attrs:{id:"double-实现绘图三道杠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#double-实现绘图三道杠"}},[t._v("#")]),t._v(" double 实现绘图三道杠")]),t._v(" "),e("p",[e("img",{attrs:{src:s(442),alt:"image-20200503200458518"}})]),t._v(" "),e("p",[t._v("先三等分，然后 bottom 占用一分")]),t._v(" "),e("h3",{attrs:{id:"inset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inset"}},[t._v("#")]),t._v(" inset")]),t._v(" "),e("p",[e("img",{attrs:{src:s(443),alt:"image-20200503200623157"}})]),t._v(" "),e("h3",{attrs:{id:"outset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outset"}},[t._v("#")]),t._v(" outset")]),t._v(" "),e("p",[e("img",{attrs:{src:s(444),alt:"image-20200503200841214"}})]),t._v(" "),e("h3",{attrs:{id:"groove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#groove"}},[t._v("#")]),t._v(" groove :")]),t._v(" "),e("p",[e("img",{attrs:{src:s(445),alt:"image-20200503200911505"}})]),t._v(" "),e("h3",{attrs:{id:"ridge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ridge"}},[t._v("#")]),t._v(" ridge")]),t._v(" "),e("p",[e("img",{attrs:{src:s(446),alt:"image-20200503200929287"}})]),t._v(" "),e("h3",{attrs:{id:"后面-4-个毫无价值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后面-4-个毫无价值"}},[t._v("#")]),t._v(" 后面 4 个毫无价值")]),t._v(" "),e("p",[e("img",{attrs:{src:s(447),alt:"image-20200503200944228"}})]),t._v(" "),e("h2",{attrs:{id:"_3-border-color-与-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-border-color-与-color"}},[t._v("#")]),t._v(" 3. border-color 与 color")]),t._v(" "),e("p",[t._v("简单说：border-color 默认颜色就是 color")]),t._v(" "),e("p",[t._v("看个例子")]),t._v(" "),e("p",[e("img",{attrs:{src:s(448),alt:"image-20200503201153500"}})]),t._v(" "),e("p",[t._v("变个颜色，也会跟着变")]),t._v(" "),e("p",[e("img",{attrs:{src:s(449),alt:"image-20200503201216537"}})]),t._v(" "),e("p",[t._v("不单独指定 border 的颜色，那么就使用 color 的")]),t._v(" "),e("p",[t._v("类似的还有 box-shadow、text-shadow 等")]),t._v(" "),e("p",[t._v("这个特性有什么用？")]),t._v(" "),e("h3",{attrs:{id:"hover-与图形变色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hover-与图形变色"}},[t._v("#")]),t._v(" hover 与图形变色")]),t._v(" "),e("p",[e("img",{attrs:{src:s(450),alt:"image-20200503201329272"}})]),t._v(" "),e("p",[t._v("使用边框来处理，值需要一处就可以")]),t._v(" "),e("p",[e("img",{attrs:{src:s(451),alt:"image-20200503201432496"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(452),alt:"image-20200503201511763"}})]),t._v(" "),e("h2",{attrs:{id:"_4-border-与-background-定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-border-与-background-定位"}},[t._v("#")]),t._v(" 4. border 与 background 定位")]),t._v(" "),e("h3",{attrs:{id:"background-定位的局限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background-定位的局限"}},[t._v("#")]),t._v(" background 定位的局限")]),t._v(" "),e("p",[t._v("只能相对左上角数值定位，不能相对右下（css2.1）")]),t._v(" "),e("p",[e("img",{attrs:{src:s(453),alt:"image-20200503201709278"}})]),t._v(" "),e("p",[t._v("让图片距离容器左边框永远是 50 px，而不管他外部容器的高度宽度。")]),t._v(" "),e("p",[t._v("要样图片永远距离右边框 50 的化，方法有很多，在这里借助 border 来实现")]),t._v(" "),e("p",[e("img",{attrs:{src:s(454),alt:"image-20200503202006327"}})]),t._v(" "),e("p",[t._v("使用了一个空白的 50px 的边框去填充右侧的空白")]),t._v(" "),e("h2",{attrs:{id:"_5-border-与三角等图形构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-border-与三角等图形构建"}},[t._v("#")]),t._v(" 5. border 与三角等图形构建")]),t._v(" "),e("p",[t._v("温故而知新：前面讲解过两种了图形的实现")]),t._v(" "),e("p",[e("img",{attrs:{src:s(455),alt:"image-20200503202238292"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(456),alt:"image-20200503202308136"}})]),t._v(" "),e("p",[t._v("上图实现的原理是：下图是帮助我们认知边框的图")]),t._v(" "),e("p",[e("img",{attrs:{src:s(457),alt:"image-20200503202345228"}})]),t._v(" "),e("p",[t._v("三角的形成：宽度和高度都为 0")]),t._v(" "),e("p",[e("img",{attrs:{src:s(458),alt:"image-20200503202620569"}})]),t._v(" "),e("p",[t._v("到这里就很简单了，要实现一个三角，把其他边变成透明的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(459),alt:"image-20200503202716758"}})]),t._v(" "),e("h3",{attrs:{id:"实际应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实际应用场景"}},[t._v("#")]),t._v(" 实际应用场景")]),t._v(" "),e("p",[e("img",{attrs:{src:s(460),alt:"image-20200503202808124"}})]),t._v(" "),e("h3",{attrs:{id:"模拟圆角"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模拟圆角"}},[t._v("#")]),t._v(" 模拟圆角")]),t._v(" "),e("p",[t._v("更高级的应用，模拟圆角")]),t._v(" "),e("p",[e("img",{attrs:{src:s(461),alt:"image-20200503202905621"}})]),t._v(" "),e("p",[t._v("原理是"),e("img",{attrs:{src:s(462),alt:"image-20200503202920574"}})]),t._v(" "),e("p",[t._v("上面的梯形优点小，放大一点，就能看清楚了")]),t._v(" "),e("p",[e("img",{attrs:{src:s(463),alt:"image-20200503202938159"}})]),t._v(" "),e("h2",{attrs:{id:"_6-border-与透明边框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-border-与透明边框"}},[t._v("#")]),t._v(" 6. border 与透明边框")]),t._v(" "),e("blockquote",[e("p",[t._v("border 的透明边框很有用！用途非常广！")])]),t._v(" "),e("p",[t._v("因为，始于 IE7，足够兼容。")]),t._v(" "),e("p",[t._v("下面开始分享案例")]),t._v(" "),e("p",[e("img",{attrs:{src:s(464),alt:"image-20200503203137925"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(465),alt:"image-20200503203148988"}})]),t._v(" "),e("p",[t._v("以及...")]),t._v(" "),e("h3",{attrs:{id:"优雅增加响应区域大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优雅增加响应区域大小"}},[t._v("#")]),t._v(" 优雅增加响应区域大小")]),t._v(" "),e("p",[e("img",{attrs:{src:s(466),alt:"image-20200503203224183"}})]),t._v(" "),e("p",[t._v("一般第一想法是下面这样")]),t._v(" "),e("p",[e("img",{attrs:{src:s(467),alt:"image-20200503203345445"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(468),alt:"image-20200503203427583"}})]),t._v(" "),e("p",[t._v("实现方式步骤：")]),t._v(" "),e("ol",[e("li",[t._v("边框用来扩大点击区域的大小")]),t._v(" "),e("li",[t._v("原来的边框使用内阴影实现； 第 2 行代码")])]),t._v(" "),e("h3",{attrs:{id:"增加可视渲染区域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加可视渲染区域"}},[t._v("#")]),t._v(" 增加可视渲染区域")]),t._v(" "),e("p",[e("img",{attrs:{src:s(469),alt:"image-20200503203620729"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(470),alt:"image-20200503203646971"}})]),t._v(" "),e("p",[t._v("让图标任意变色，想变色的时候 drop-shadow 出来一个，然后把原来的图标隐藏掉。就很方便了，如下图的示意图")]),t._v(" "),e("p",[e("img",{attrs:{src:s(471),alt:"image-20200503203817917"}})]),t._v(" "),e("p",[t._v("但是这种方式，在 Chrome 浏览器下，"),e("strong",[t._v("页面中不可见元素的 drop-shadow")]),t._v(" 也是不可见的，还包括如下的投影都失败")]),t._v(" "),e("p",[e("img",{attrs:{src:s(472),alt:"image-20200503203951930"}})]),t._v(" "),e("p",[t._v("那么在可视区域外元素无投影，区域内但透明的部分呢？")]),t._v(" "),e("p",[e("img",{attrs:{src:s(473),alt:"image-20200503204138070"}})]),t._v(" "),e("p",[t._v("上面是最终实现效果的样子。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(474),alt:"image-20200503204211386"}})]),t._v(" "),e("p",[t._v("将隐藏属性去掉，左边是原始图标，显示的图标是投影到透明的 边框上的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(475),alt:"image-20200503204301747"}})]),t._v(" "),e("h2",{attrs:{id:"border-在布局中的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-在布局中的应用"}},[t._v("#")]),t._v(" border 在布局中的应用")]),t._v(" "),e("p",[t._v("还是相当普遍和可靠的。")]),t._v(" "),e("h3",{attrs:{id:"有限标签下的标题栏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有限标签下的标题栏"}},[t._v("#")]),t._v(" 有限标签下的标题栏")]),t._v(" "),e("p",[t._v("由于不常使用，就不展开讲解")]),t._v(" "),e("h3",{attrs:{id:"border-与等高布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-与等高布局"}},[t._v("#")]),t._v(" border 与等高布局")]),t._v(" "),e("p",[t._v("先看他的效果")]),t._v(" "),e("p",[e("img",{attrs:{src:s(476),alt:"image-20200503204934506"}})]),t._v(" "),e("p",[t._v("原理如下")]),t._v(" "),e("p",[e("img",{attrs:{src:s(477),alt:"image-20200503204952533"}})]),t._v(" "),e("ul",[e("li",[t._v("黑色区域是： "),e("code",[t._v(".box border-left")]),t._v(" 左边框模拟的")]),t._v(" "),e("li",[t._v("文字是：通过 margin-left -300px 定位到边框上面去的")])]),t._v(" "),e("p",[t._v("此类实现的好处：之前讲解过，使用 锚点时有可能飞来飞去的效果，使用边框就没有这种问题。")]),t._v(" "),e("p",[t._v("但是也是有局限的：不支持百分比宽度")])])}),[],!1,null,null,null);a.default=r.exports},432:function(t,a,s){t.exports=s.p+"assets/img/image-20200503194910311.dda7e65e.png"},433:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195329077.56141a5f.png"},434:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195356951.0eed033f.png"},435:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195522308.ced5fa05.png"},436:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195537981.09085e12.png"},437:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195653770.78920e95.png"},438:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195710895.759f46e7.png"},439:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195815556.eac4da62.png"},440:function(t,a,s){t.exports=s.p+"assets/img/image-20200503195958611.7c5757f2.png"},441:function(t,a,s){t.exports=s.p+"assets/img/image-20200503200051858.9c40daec.png"},442:function(t,a,s){t.exports=s.p+"assets/img/image-20200503200458518.32d0b520.png"},443:function(t,a,s){t.exports=s.p+"assets/img/image-20200503200623157.b03918b7.png"},444:function(t,a,s){t.exports=s.p+"assets/img/image-20200503200841214.85e0c687.png"},445:function(t,a,s){t.exports=s.p+"assets/img/image-20200503200911505.bf6dd5b0.png"},446:function(t,a,s){t.exports=s.p+"assets/img/image-20200503200929287.4599d2f9.png"},447:function(t,a,s){t.exports=s.p+"assets/img/image-20200503200944228.459558a0.png"},448:function(t,a,s){t.exports=s.p+"assets/img/image-20200503201153500.b1a5e93c.png"},449:function(t,a,s){t.exports=s.p+"assets/img/image-20200503201216537.e0bd5eac.png"},450:function(t,a,s){t.exports=s.p+"assets/img/image-20200503201329272.68bef6d3.png"},451:function(t,a,s){t.exports=s.p+"assets/img/image-20200503201432496.0bc21752.png"},452:function(t,a,s){t.exports=s.p+"assets/img/image-20200503201511763.cdea167c.png"},453:function(t,a,s){t.exports=s.p+"assets/img/image-20200503201709278.058a04ff.png"},454:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202006327.09c8cb22.png"},455:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202238292.51e4027d.png"},456:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202308136.f3098148.png"},457:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202345228.e7698a8d.png"},458:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202620569.b82eae51.png"},459:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202716758.e30a8844.png"},460:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202808124.5af295de.png"},461:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202905621.28aa9548.png"},462:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202920574.ea3aad64.png"},463:function(t,a,s){t.exports=s.p+"assets/img/image-20200503202938159.d9333d58.png"},464:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203137925.5cb0a846.png"},465:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203148988.801de6c2.png"},466:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203224183.d8b8cf0a.png"},467:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203345445.22e12560.png"},468:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203427583.0065f37d.png"},469:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203620729.175d9ea0.png"},470:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203646971.5d2cae46.png"},471:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203817917.f5f3f5f7.png"},472:function(t,a,s){t.exports=s.p+"assets/img/image-20200503203951930.c9c6d4fe.png"},473:function(t,a,s){t.exports=s.p+"assets/img/image-20200503204138070.8e830239.png"},474:function(t,a,s){t.exports=s.p+"assets/img/image-20200503204211386.597957c7.png"},475:function(t,a,s){t.exports=s.p+"assets/img/image-20200503204301747.e28e4ef6.png"},476:function(t,a,s){t.exports=s.p+"assets/img/image-20200503204934506.c068e069.png"},477:function(t,a,s){t.exports=s.p+"assets/img/image-20200503204952533.d8f1ef7c.png"}}]);