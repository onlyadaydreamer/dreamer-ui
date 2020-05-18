<template>
    <div>
        <!-- name: 提交到后台的字段名
        action: 提交到后端的路径
        limit: 限制提交个数

        一些钩子函数:
        on-exceed: 超出限制后 会执行此方法
        on-change: 如果当前上传文件的状态发生变化的时候会触发, 成功或失败
        on-success:
        on-error:
        on-progress: 进度条
        -->

        <d-upload
            name="avatar"
            action="http://localhost:3000/upload"
            :file-list="fileList"
            :limit="3"
            accept="image/jpeg"
            :multiple="true"
            :on-exceed="handleExceed"
            :on-change="handleChange"
            :on-success="handleSuccess"
            :on-error="handleError"
            :on-progress="handleProgress"
            :before-upload="beforeUpload"
            :before-remove="beforeRemove"
            :drag="true"
        >
            <d-button type="primary">点击上传</d-button>
            <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </d-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            fileList: []
        }
    },
    methods: {
        handleExceed(files, fileList) {
            alert('超出限制');
        },
        handleChange(file) {
            // console.log(file);
        },
        handleSuccess() {

        },
        handleError() {

        },
        handleProgress() {

        },
        beforeRemove() {
            return window.confirm('确定要删除该文件吗?');
        },
        beforeUpload(rawFile) {
            let limitSize = rawFile.size / 1024 > 500;
            if (limitSize) {
                console.log('超出了最大大小限制');
                return false;
            } else if (!rawFile.name.endsWith('.jpg')) {
                console.log('文件类型不对');
                return false;
            }
            return true;
        }
    }
}
</script>
<style>
</style>
