import { hello } from '../../../api/userTenant/user.js'
import { selectList } from '../../../api/userTenant/tenant.js'
import { selectListRecord, selectListTenant } from '../../../api/record/recordtype.js'
import config from '../../../config'
const portal = config.service.userTenant

export default {
    data() {
        return {
            demo: '',
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            fileList:[],
            form: {
                name: '',
                region: null,
                date1: null,
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            action: `http://localhost:7788/user-tenant/user/uploadFile`,
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            },
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
        },
        onSubmit() {
            console.log('submit!', this.form);
        },
        beforeUpload() { },
        remove() { },
        handleChange(info) {
            console.log(info)
        //     if (info.file.status === 'done' && info.file.response.success && info.file.response.data) {
        //       this.$message.success('操作成功')
        //     } else if (info.file.status === 'error' && !info.file.response.success) {
        //       this.$message.error('操作失败')
        //     } else if (
        //       (info.file.status === 'done' && !info.file.response.success) ||
        //       (info.file.status === 'done' && !info.file.response.data)
        //     ) {
        //       this.$message.error('Excel内容有误,请检查后重新导入')
        //     }
        //     this.fileList = info.fileList
          }
    }

}