import { fetchQqMusic } from '@/utils/api'

const musicModule = {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        getQqMusic(store, params) {
            fetchQqMusic(params).then(res=>{
                console.log('qq', res)
            })
        }
    }
}

export default musicModule