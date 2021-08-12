(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{359:function(e,s,t){e.exports=t.p+"assets/img/redis-standalone.a6152d9b.png"},360:function(e,s,t){e.exports=t.p+"assets/img/redis-cluster-setup.c1d7206d.png"},384:function(e,s,t){"use strict";t.r(s);var a=t(45),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"redis-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-setup"}},[e._v("#")]),e._v(" Redis Setup")]),e._v(" "),a("p",[e._v("This redis operator supports below deployment strategies for redis:-")]),e._v(" "),a("ul",[a("li",[e._v("Redis cluster setup (in-built leader follower with sharding and replication mode)")]),e._v(" "),a("li",[e._v("Redis standalone setup")])]),e._v(" "),a("p",[e._v("Here we will see how we can leverage these strategies.")]),e._v(" "),a("p",[e._v("If we want to use password based authentication inside Redis, we need to create a secret for it. By default the name of the secret is "),a("code",[e._v("redis-secret")]),e._v(" and key name is "),a("code",[e._v("password")]),e._v(", but it can be overidden in helm charts.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl create secret generic redis-secret "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" \n    --from-literal"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("password -n ot-operators\n")])])]),a("h2",{attrs:{id:"redis-standalone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-standalone"}},[e._v("#")]),e._v(" Redis Standalone")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:t(359),height:"400",width:"400"}})]),e._v(" "),a("p",[e._v("In redis standalone mode, we deploy redis as a single Stateful pod which means ease of setup, no complexity, no high availability, and no resilience.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ helm upgrade redis ot-helm/redis --install --namespace ot-operators\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nRelease "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"redis"')]),e._v(" does not exist. Installing it now.\nNAME: redis\nLAST DEPLOYED: Sun May  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":59:48 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("\nNAMESPACE: ot-operators\nSTATUS: deployed\nREVISION: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nTEST SUITE: None\n")])])]),a("p",[e._v("Verify the standalone redis setup by "),a("code",[e._v("kubectl")]),e._v(" command line.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get pods -n ot-operators\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nNAME                              READY   STATUS    RESTARTS   AGE\nredis-operator-74b6cbf5c5-td8t7   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          81m\nredis-standalone-0                "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          56s\n")])])]),a("h2",{attrs:{id:"redis-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-cluster"}},[e._v("#")]),e._v(" Redis Cluster")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:t(360),height:"450",width:"400"}})]),e._v(" "),a("p",[e._v("A Redis cluster is simply a "),a("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/understanding-database-sharding",target:"_blank",rel:"noopener noreferrer"}},[e._v("data sharding strategy"),a("OutboundLink")],1),e._v(". It automatically partitions data across multiple Redis nodes. It is an advanced feature of Redis which achieves distributed storage and prevents a single point of failure.")]),e._v(" "),a("p",[e._v("For redis cluster setup we can use same helm command but with different parameters.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ helm upgrade redis-cluster ot-helm/redis-cluster "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --set redisCluster.clusterSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" --install --namespace ot-operators\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nRelease "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"redis-cluster"')]),e._v(" does not exist. Installing it now.\nNAME: redis-cluster\nLAST DEPLOYED: Sun May  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":11:38 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("\nNAMESPACE: ot-operators\nSTATUS: deployed\nREVISION: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nTEST SUITE: None\n")])])]),a("p",[e._v("Verify the cluster by checking the pod status of leader and follower pods.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get pods -n ot-operators\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nNAME                                 READY   STATUS    RESTARTS   AGE\nredis-cluster-follower-0             "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          149m\nredis-cluster-follower-1             "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          150m\nredis-cluster-follower-2             "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          151m\nredis-cluster-leader-0               "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          149m\nredis-cluster-leader-1               "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          150m\nredis-cluster-leader-2               "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          151m\nredis-operator-5944ffd957-pt57s      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          156m\n")])])]),a("p",[e._v("If all the pods are in the running state of leader and follower Statefulsets, then we can check the health of the redis cluster by using "),a("code",[e._v("redis-cli")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis-leader-0 -n ot-operators -- redis-cli -a Opstree@1234 cluster nodes\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nDefaulting container name to redis-leader.\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl describe pod/redis-leader-0 -n ot-operators'")]),e._v(" to see all of the containers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" this pod.\nWarning: Using a password with "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-a'")]),e._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-u'")]),e._v(" option on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" line interface may not be safe.\n528438a759cee4528c3071d17d75b27b0818555d "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".0.219:6379@16379 myself,master - "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619952294000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("-5460\n8ec7812903b7e046bec2f2a7bce4a9ccadfa4188 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".0.221:6379@16379 slave d0ff3892d2eba0b2707199cb5df57adbba214bcd "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619952297241")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" connected\n60f932272322bafbd8c3e16328d26af676aeb8d6 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".0.220:6379@16379 slave 6e80da4902802ebffa94cbac9b7d98e9fd74121f "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619952297000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" connected\n6e80da4902802ebffa94cbac9b7d98e9fd74121f "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".2.178:6379@16379 master - "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619952297000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5461")]),e._v("-10922\nd0ff3892d2eba0b2707199cb5df57adbba214bcd "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".1.178:6379@16379 master - "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619952298245")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10923")]),e._v("-16383\nc2b74bd2a360068db01dfc8f00b8d0b012e21215 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".1.177:6379@16379 slave 528438a759cee4528c3071d17d75b27b0818555d "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619952297000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" connected\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);