import axios from 'axios'

const apiClient  = axios.create({
	baseURL: 'http://osapi.thetpainghtut.com/api/v1',
	withCredentials: false,
	headers:{
		Accept: 'application/json',
		'Content-type': 'application/json'
	}
})

export default{
	//index [Exercise]
	getItems(){
		return apiClient.get('/items')
	},
	//detail [Detail]
	getItem(id){
		return apiClient.get('/items/'+id)
	},
	createOrder(data){
    return apiClient.post('/orders',data)
  },
 getOrders(){
		return apiClient.get('/orders')
	},

}