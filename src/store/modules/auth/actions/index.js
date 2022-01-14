import axios from "axios";
import Vue from "vue";

const vm = new Vue();

export default {
    authenticateUser({ commit }, data){
        let loader = vm.$loading.show();
        axios.post('/admin/auth/login', data)
        .then((res) => {
            loader.hide();

            const { transaction, message } = res.data;

            if(transaction.status == true){
                commit('setAuth', res.data.data);
                window.location.href = "/"
            }else{
                vm.$swal({
                    icon: "error",
                    text: message.content
                });
            }
        }).catch((err) => {
            loader.hide();
            console.log(err);
            vm.$swal({
                icon: "error",
                text: "Ocurrio un problema al momento de loguearte"
            })
        })
    }
}