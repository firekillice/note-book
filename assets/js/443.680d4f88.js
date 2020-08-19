(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{1070:function(e,s,t){"use strict";t.r(s);var a=t(15),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"加密解密技术-encryption-and-decryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密解密技术-encryption-and-decryption"}},[e._v("#")]),e._v(" 加密解密技术 / Encryption and Decryption")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("重要提示")]),e._v(" "),t("p",[e._v("要使用加密和解密特性，您需要在 JVM 中安装完整的 JCE (默认情况下不包括它)。\n"),t("a",{attrs:{href:"https://www.oracle.com/search/results?Nty=1&Ntk=SI-ALL5&Ntt=JCE",target:"_blank",rel:"noopener noreferrer"}},[e._v("可以在官网搜索 JCE"),t("OutboundLink")],1),e._v("  然后选择你当前版本的 jdk/jre ；")]),e._v(" "),t("p",[e._v("比如我这里是 jdk8，选择")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files for JDK/JRE 8 Download"),t("OutboundLink")],1),e._v(" 下载")]),e._v(" "),t("p",[e._v("下载之后的 jce_policy-8.zip 包中有两个文件："),t("code",[e._v("local_policy.jar")]),e._v("、 "),t("code",[e._v("US_export_policy.jar")]),e._v(" 和一份 README.txt 说明，简单说需要把这两个文件覆盖以下两个路径中的文件")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("D:\\Program Files\\Java\\jre8\\lib\\security")])]),e._v(" "),t("li",[t("code",[e._v("D:\\Program Files\\Java\\jdk1.8.0_45\\jre\\lib\\security")])])]),e._v(" "),t("p",[e._v("也就是你 jdk 和 jre 安装目录下")])]),e._v(" "),t("p",[e._v("在配置文件中如果有加密属性存在的话（以 {cipher} 作为前缀），在发送给客户端之前会进行解密；\n这样的好处在于，当配置文件在文件系统后端时（如 git 仓库），密码不会以明文方式被暴露，比如如下 yml")]),e._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("datasource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" dbuser\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{cipher}FKSAJDFGYOS8F7GLHAKERGFHLSAJ'")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("config server 服务器需要公开 "),t("code",[e._v("/encrypt")]),e._v(" 和 "),t("code",[e._v("/decrypt")]),e._v(" 断点，在 "),t("code",[e._v("org.springframework.cloud.config.server.encryption.EncryptionController")]),e._v(" 类中实现的")]),e._v(" "),t("p",[e._v("我们可以使用这两个断点进行加密和解密；记得关闭 security 身份认证，否则会出现使用 curl 请求什么也不返回的问题；但是在实际应用中需要对该端点进行保护，保证是安全的")]),e._v(" "),t("p",[e._v("在这之前需要在 bootstrap.yml 中配置以下属性；")]),e._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("encrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("123456")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("使用 curl 对 字符串 mysecret 加密；如果没有 JCE 的两个文件，此操作会一直阻塞")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" localhost:11000/encrypt -d mysecret\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("72")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(":00:12  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(":00:12 --:--:--     8d10b24a37054040ac811e86b6231c6d03ef6c3349315dce449b0ace09f78dd50\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("对于加密和解密这里展示的暂时还不能进行实际使用，因为本人在测试过程中，照上面这样配置，每次加密都是返回不同的字符串")]),e._v(" "),t("p",[e._v("对于在 curl 中如果加密的值有特殊字符的话可以使用 "),t("code",[e._v("--data-urlencode")]),e._v(" 代替 "),t("code",[e._v("-d")]),e._v("（这里暂未测试）")]),e._v(" "),t("p",[e._v("加密解密还支持 "),t("code",[e._v("/*/{name}/{profiles}")]),e._v(" ，但是这种形式暂时还没有看懂怎么使用的")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://cloud.spring.io/spring-cloud-static/Greenwich.SR1/single/spring-cloud.html#_encryption_and_decryption_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("本章官网地址"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"密钥管理-key-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#密钥管理-key-management"}},[e._v("#")]),e._v(" 密钥管理 / Key Management")]),e._v(" "),t("p",[e._v("配置服务器可以使用对称(共享)密钥，也可以使用非对称密钥（RSA密钥对）。")]),e._v(" "),t("p",[e._v("就安全性而言，非对称选择更为优越，但是使用对称密钥通常更为方便，因为它是要在 bootstrap.properties 中配置一个值就可以使用。")]),e._v(" "),t("p",[e._v("若要配置对称密钥，可以使用 encrypt.key ，但是不能使用 encrypt.key 配置对称密钥")]),e._v(" "),t("p",[e._v("需要在 bootstrap.yml 中配置密钥属性")]),e._v(" "),t("h3",{attrs:{id:"对称密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称密钥"}},[e._v("#")]),e._v(" 对称密钥")]),e._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("encrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("123456")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("注意：目前不知道怎么应用")]),e._v(" "),t("h3",{attrs:{id:"非对称密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非对称密钥"}},[e._v("#")]),e._v(" 非对称密钥")]),e._v(" "),t("p",[e._v("配置费对称密钥可以使用 keystore （例如，由 JDK 附带的 keytool 实用程序创建）。keystore 的配置属性是 "),t("code",[e._v("encrypt.keyStore.*")]),e._v("，\n其中 "),t("code",[e._v("*")]),e._v(" 如下表所述")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("encrypt.keyStore.location")])]),e._v(" "),t("td",[e._v("包含资源位置")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("encrypt.keyStore.password")])]),e._v(" "),t("td",[e._v("保存解锁密钥存储库的密码")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("encrypt.keyStore.alias")])]),e._v(" "),t("td",[e._v("标识要使用存储中的哪个键")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("encrypt.keyStore.type")])]),e._v(" "),t("td",[e._v("要创建的密钥存储库的类型。默认为 "),t("code",[e._v("jks")])])])])]),e._v(" "),t("p",[e._v("加密是使用公钥进行的，解密需要使用私钥。因此，原则上，如果只想加密(并且准备使用私钥在本地解密值)，则只能在服务器中配置公钥。实际上，您可能不希望在本地进行解密，因为它将关键管理过程分散到所有客户端，而不是集中在服务器上。")]),e._v(" "),t("h2",{attrs:{id:"使用-keytool-创建用于测试的密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-keytool-创建用于测试的密钥"}},[e._v("#")]),e._v(" 使用 keytool 创建用于测试的密钥")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('keytool -genkeypair -alias mytestkey -keyalg RSA \\\n  -dname "CN=Web Server,OU=Unit,O=Organization,L=City,S=State,C=US" \\\n  -keypass changeme -keystore server.jks -storepass letmein\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("ul",[t("li",[t("p",[e._v("genkeypair")])]),e._v(" "),t("li",[t("p",[e._v("alias : 可以是任意字符，只要不提示错误即可。因一个密钥库中可以存放多个密钥。")])]),e._v(" "),t("li",[t("p",[e._v("keyalg： 指定密钥的算法。可以选择的密钥算法有：RSA、DSA、EC。")])]),e._v(" "),t("li",[t("p",[e._v("dname ：")]),e._v(" "),t("p",[e._v("指定证书拥有者信息 例如： "),t("code",[e._v('"CN=名字与姓氏,OU=组织单位名称,O=组织名称,L=城市或区域名称,ST=州或省份名称,C=单位的两字母国家代码"')])])]),e._v(" "),t("li",[t("p",[e._v("keypass：密钥密码(私钥的密码)")])]),e._v(" "),t("li",[t("p",[e._v("keystore： 密钥库名称。可给出绝对路径。默认在当前目录创建证书库。")])]),e._v(" "),t("li",[t("p",[e._v("storepass：密钥库名称密码(私钥的密码)")])])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ keytool -genkeypair -alias mytestkey -keyalg RSA "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -dname "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CN=Web Server,OU=Unit,O=Organization,L=City,S=State,C=US"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -keypass changeme -keystore server.jks -storepass letmein\n\nWarning:\nJKS 密钥库使用专用格式。建议使用 "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"keytool -importkeystore -srckeystore server.jks -destkeystore server.jks -deststoretype pkcs12"')]),e._v(" 迁移到行业标准格式 PKCS12。\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("虽然有一个警告，但是还是生成了；")]),e._v(" "),t("p",[e._v("在 config server bootstrap.yml 中添加以下配置")]),e._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("encrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("keyStore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("location")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" classpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("/server.jks  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 把刚才生成的 jks 文件放在 resource 下，这样写才能被找到")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" letmein "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 对应 storepass")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("alias")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" mytestkey\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("secret")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" changeme "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 对应 keypass")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("h2",{attrs:{id:"加密值，并配置在-yml-中-实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密值，并配置在-yml-中-实践"}},[e._v("#")]),e._v(" 加密值，并配置在 yml 中 实践")]),e._v(" "),t("p",[e._v("首先加密一个值")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 加密结果存储在文件中，因为我尝试好几次都说解密失败，可能是在控制台复制出现了问题")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 结果是一个 Base64 的字符串")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" localhost:11000/encrypt -d mysecret "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" aa.txt\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("除了加密属性值中的 "),t("code",[e._v("{cipher}")]),e._v(" 前缀外，配置服务器还在(Base64 编码的)密码文本开始之前查找零个或多个 "),t("code",[e._v("{name:value}")]),e._v(" 前缀。\n密钥被传递给 TextEncryptorLocator，它可以执行为密码定位 TextEncryptor 所需的任何逻辑。\n如果您配置了密钥存储库 (encryption.keystore.location)，默认定位器将查找密钥前缀提供别名的密钥，并使用类似于下面这样的密文:")]),e._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cloud")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("overrides")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bar\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pwd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{cipher}{key:mytestkey}AQAn3u819EQ/5aRWAAi5ZyOOeaQSfW5uCCkYHaUbGNKbsg1x9UgLQTsPBLU72hUhOLzGG9/qrHvGQ4w3+dPRZLlHryeAmrtj/u9Fw4Np6D4/eU9LWrsl8ak87jiACXEgvDsEzrlhWTk6P7uhPYWhzeL8Ymweus30AZfHEHwLREgKZmIn24L9e9IFr0BX5G1b5kl1jeaHrwOYEXvdv8Q+lqFvf4EliQAwLzqVZlXLCK/uQtUbK0gZQsNo04/T2WIsWuv6GSAs96jjPpdrQgHuEUr8NEe2Uoa+L2MizqUlzVEQC3TKplXTH0lybKfMngZxDO6Vj78NJmoiz+RcPXc6oYOvbXEVj96VLW96S4WmlNcaORYwrCYT5/mxZI4vj9PiqD8='")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[t("code",[e._v("kye:mytestkey")]),e._v(" 是我们刚生成的密钥存储库中的别名（alias）；稍微跟踪了一下代码，在项目启动时，会使用 别名找到密码进行解密；\n如果 key 或者密码文本有问题导致不能解密，将在启动界面报错")]),e._v(" "),t("p",[e._v("在客户端打印 pwd 属性，会发现加密文本传递到客户端之后密码的确先被解密了")]),e._v(" "),t("blockquote",[t("p",[e._v("When the keys are being used only to encrypt a few bytes of configuration data (that is, they are not being used elsewhere), key rotation is hardly ever necessary on cryptographic grounds. However, you might occasionally need to change the keys (for example, in the event of a security breach). In that case, all the clients would need to change their source config files (for example, in git) and use a new {key:…​} prefix in all the ciphers. Note that the clients need to first check that the key alias is available in the Config Server keystore.")])]),e._v(" "),t("p",[e._v("上面这段话没有看明白是什么意思；个人理解是在更改密钥库密码之后，加密文本需要重新加密，客户端需要重新获取加密文本")]),e._v(" "),t("h2",{attrs:{id:"加密服务属性-客户端自己解密属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密服务属性-客户端自己解密属性"}},[e._v("#")]),e._v(" 加密服务属性 - 客户端自己解密属性")]),e._v(" "),t("p",[e._v("通过 "),t("code",[e._v("bootstrap.[yml|properties]")]),e._v(" 中的 "),t("code",[e._v("spring.cloud.config.server.encrypt.enabled=false")]),e._v(" 属性来控制是否将在发送到客户端之前启用对环境属性的解密。")]),e._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cloud")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("encrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false  ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 默认为 true，解密后传输到客户端")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("经过尝试之后，该属性没有任何效果。始终都会解密后发给客户端")])])}),[],!1,null,null,null);s.default=n.exports}}]);