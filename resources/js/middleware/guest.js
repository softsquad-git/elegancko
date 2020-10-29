import axios from 'axios';
export default function guest ({ next }){
    if(localStorage.getItem('token')){
        axios.get('user/logged')
            .then((data) => {
                const user = data.data;
                if (user.role === 2) {
                    return next({
                        name: 'AdminPageIndex'
                    })
                } else if (user.role === 1) {

                } else {
                    return next({
                        name: 'IndexPage'
                    })
                }

            })
    }

    return next();
}
