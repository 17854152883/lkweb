import { hello } from '../../../api/userTenant/user.js'
import { selectList } from '../../../api/userTenant/tenant.js'
import { selectListRecord,selectListTenant } from '../../../api/record/recordtype.js'

export default {
    data() {
        return {
            demo:''
        }
    },
    mounted() { 
        console.log('初始化成功')
    },
    methods: {
        hello() { 
            console.log('访问了hello方法')
            hello().then(res => { 
                console.log('访问返回的是',res)
            })
        },
        selectList() { 
            selectList().then(res => { 
                console.log('访问租户返回的租户列表是',res)
            })
        },
        selectListRecord() { 
            selectListRecord().then(res => { 
                console.log('访问记录微服务返回的是',res)
            })
        },
        selectListTenant() { 
            selectListTenant().then(res => { 
                console.log('访问远程调用的接口返回的是',res)
            })
        }

    }

}