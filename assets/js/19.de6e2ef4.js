(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{380:function(t,e,s){"use strict";s.r(e);var a=s(45),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"redis-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-cluster"}},[t._v("#")]),t._v(" Redis Cluster")]),t._v(" "),s("p",[t._v("The redis setup cluster mode can be customized using custom configuration. If redis setup is done by "),s("strong",[t._v("Helm")]),t._v(", in that case "),s("code",[t._v("values.yaml")]),t._v(" can be updated.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/OT-CONTAINER-KIT/helm-charts/blob/main/charts/redis-cluster/values.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis cluster values"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("But if the setup is not done via Helm, in that scenario we may have to customize the CRD parameters.")]),t._v(" "),s("p",[t._v("In this configuration section, we have these configuration parameters:-")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/guide/configuration.html#helm-parameters"}},[t._v("Helm Parameters")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/guide/configuration.html#crd-parameters"}},[t._v("CRD Parameters")])],1)]),t._v(" "),s("h2",{attrs:{id:"helm-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helm-parameters"}},[t._v("#")]),t._v(" Helm Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Name")])]),t._v(" "),s("th",[s("strong",[t._v("Default Value")])]),t._v(" "),s("th",[s("strong",[t._v("Required")])]),t._v(" "),s("th",[s("strong",[t._v("Description")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("redisCluster.clusterSize")])]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Size of the redis cluster leader and follower nodes")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisCluster.secretName")])]),t._v(" "),s("td",[t._v("redis-secret")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Name of the existing secret in Kubernetes")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisCluster.secretKey")])]),t._v(" "),s("td",[t._v("password")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Name of the existing secret key in Kubernetes")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisCluster.image")])]),t._v(" "),s("td",[t._v("quay.io/opstree/redis")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Name of the redis image")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisCluster.tag")])]),t._v(" "),s("td",[t._v("v6.2")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Tag of the redis image")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisCluster.imagePullPolicy")])]),t._v(" "),s("td",[t._v("IfNotPresent")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Image Pull Policy of the redis image")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisCluster.leaderServiceType")])]),t._v(" "),s("td",[t._v("ClusterIP")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Kubernetes service type for Redis Leader")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisCluster.followerServiceType")])]),t._v(" "),s("td",[t._v("ClusterIP")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Kubernetes service type for Redis Follower")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisExporter.enabled")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Redis exporter should be deployed or not")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisExporter.image")])]),t._v(" "),s("td",[t._v("quay.io/opstree/redis-exporter")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Name of the redis exporter image")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisExporter.tag")])]),t._v(" "),s("td",[t._v("v6.2")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Tag of the redis exporter image")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("redisExporter.imagePullPolicy")])]),t._v(" "),s("td",[t._v("IfNotPresent")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Image Pull Policy of the redis exporter image")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("nodeSelector")])]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("NodeSelector for redis pods")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("storageSpec")])]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Storage configuration for redis setup")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("securityContext")])]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Security Context for redis pods")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("affinity")])]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Affinity for node and pod for redis pods")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("tolerations")])]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Tolerations for redis pods")])])])]),t._v(" "),s("h1",{attrs:{id:"crd-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crd-parameters"}},[t._v("#")]),t._v(" CRD Parameters")]),t._v(" "),s("p",[t._v("These are the CRD Parameters which is currently supported by Redis Exporter for standalone CRD.")]),t._v(" "),s("p",[s("strong",[t._v("clusterSize")])]),t._v(" "),s("p",[s("code",[t._v("clusterSize")]),t._v(" is size of the Redis leader and follower nodes.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[s("strong",[t._v("redisLeader")])]),t._v(" "),s("p",[s("code",[t._v("redisLeader")]),t._v(" is the field for Redis leader related configurations.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redisLeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n")])])]),s("p",[s("strong",[t._v("redisFollower")])]),t._v(" "),s("p",[s("code",[t._v("redisFollower")]),t._v(" is the field for Redis follower related configurations.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redisFollower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n")])])]),s("p",[s("strong",[t._v("kubernetesConfig")])]),t._v(" "),s("p",[t._v("In the "),s("code",[t._v("kubernetesConfig")]),t._v(" section, we define configuration related to Kubernetes.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetesConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" quay.io/opstree/redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v6.2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 101m\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 128Mi\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("limits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 101m\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 128Mi\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redisSecret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LoadBalancer\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullSecrets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" regcred\n")])])]),s("p",[s("strong",[t._v("redisExporter")])]),t._v(" "),s("p",[s("code",[t._v("redisExporter")]),t._v(" configuration which enable the metrics for Redis Database to get monitored by Prometheus.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redisExporter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" quay.io/opstree/redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exporter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100m\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 128Mi\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("limits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100m\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 128Mi\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" REDIS_EXPORTER_INCL_SYSTEM_METRICS\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UI_PROPERTIES_FILE_NAME\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configMapKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ui_properties_file_name\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SECRET_USERNAME\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" username\n")])])]),s("p",[s("strong",[t._v("storage")])]),t._v(" "),s("p",[s("code",[t._v("storage")]),t._v(" configuration for Redis Statefulset pods.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeClaimTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storageClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" standard\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ReadWriteOnce"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1Gi\n")])])]),s("p",[s("strong",[t._v("priorityClassName")])]),t._v(" "),s("p",[t._v("Name of the Kubernetes priority class which you want to associate with redis setup.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("priorityClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" priority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),s("p",[s("strong",[t._v("nodeSelector")])]),t._v(" "),s("p",[t._v("Map of the labels which you want to use as nodeSelector.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/hostname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minikube\n")])])]),s("p",[s("strong",[t._v("securityContext")])]),t._v(" "),s("p",[t._v("Kubernetes security context for redis pods.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("securityContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runAsUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),s("p",[s("strong",[t._v("affinity")])]),t._v(" "),s("p",[t._v("Affinity for node and pod for redis setup.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("affinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeAffinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requiredDuringSchedulingIgnoredDuringExecution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelectorTerms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchExpressions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" disktype\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" In\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ssd\n")])])]),s("p",[s("strong",[t._v("tolerations")])]),t._v(" "),s("p",[t._v("Tolerations for nodes and pods in Kubernetes.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tolerations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Equal"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("effect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NoSchedule"')]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);