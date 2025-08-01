function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('User data fetched with ID:', id);
            resolve()
        }, 3000)
    })
}

function fetchPost(id) {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('post data fetched with ID:', id);
            resolve()
        }, 3000)
    })
}

function fetchComment(id) {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Comment data fetched with ID:', id);
            resolve()
        }, 3000)
    })
}

// HELL 

// fetchUser(111, () => {
//     fetchPost(2222, () => {
//         fetchComment(3333, () => {
//             console.log('DONE')
//       })
//   })
// })


/*
    Promise Chaining
*/
    fetchUser(111)
    .then(() => fetchPost(222))
    .then(() => fetchComment(333))
    .then(() => {
        console.log('DONE');
    })

/*
    ASYNC - AWAIT
*/
async function handleData() {
    await fetchUser(111)
    await fetchPost(2222)
    await fetchComment(33333)
    console.log('DONE')
}

handleData()








