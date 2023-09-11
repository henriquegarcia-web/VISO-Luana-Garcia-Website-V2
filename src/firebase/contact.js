import { database, ref, push, get } from './firebase'

// =================================================== CREATE ADMIN ACCOUNT

const createUserProfile = async ({ userName, userPhone }) => {
  try {
    const initalAssessments = []

    const userData = {
      userName,
      userPhone,
      userAssessments: initalAssessments,
      userCreatedAt: Date.now()
    }

    const userRef = push(ref(database, 'discAssessments'), userData)

    return userRef.key
  } catch (error) {
    return null
  }
}

const checkIfUserExists = async ({ userPhone }) => {
  try {
    const querySnapshot = await get(
      query(
        child(ref(database, 'discAssessments'), 'userPhone'),
        '==',
        userPhone
      )
    )

    if (querySnapshot.exists()) {
      return querySnapshot.key
    } else {
      return null
    }
  } catch (error) {
    // console.error('Erro ao verificar se o usuário existe:', error)
    // throw error
    return null
  }
}

const getUserDataById = async (userId) => {
  try {
    const userRef = ref(database, 'discAssessments/' + userId)
    const userSnapshot = await get(userRef)

    if (userSnapshot.exists()) {
      const userData = userSnapshot.val()
      return userData
    } else {
      return null
    }
  } catch (error) {
    console.error('Erro ao obter os dados do usuário:', error)
    // throw error;
    return null
  }
}

// =================================================== GET ADMIN ACCOUNTS

// const getContacts = (callback) => {
//   const contactsRef = ref(database, 'contacts')

//   const listener = (snapshot) => {
//     try {
//       const contact = []

//       snapshot.forEach((contactSnapshot) => {
//         const contactId = contactSnapshot.key
//         const contactData = contactSnapshot.val()
//         const account = { contactId, ...contactData }
//         contacts.push(account)
//       })

//       callback(contacts)
//     } catch (error) {
//       console.error('Erro ao obter lista de contatos:', error)
//     }
//   }

//   onValue(contactsRef, listener)

//   return () => {
//     off(contactsRef, 'value', listener)
//   }
// }

export { createUserProfile, checkIfUserExists, getUserDataById }
