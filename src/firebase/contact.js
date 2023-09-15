import {
  database,
  ref,
  push,
  get,
  orderByChild,
  query,
  equalTo,
  child,
  set,
  off,
  onValue
} from './firebase'

// =================================================== CREATE ADMIN ACCOUNT

const createUserProfile = async ({ userName, userPhone }) => {
  try {
    const dbRef = ref(database, 'discAssessments')
    const phoneQuery = await query(
      dbRef,
      orderByChild('userPhone'),
      equalTo(userPhone)
    )

    const snapshot = await get(phoneQuery)

    if (snapshot.exists()) {
      return Object.keys(snapshot.val())[0]
    }

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
    console.log(error)

    return null
  }
}

// const checkIfUserExists = async (userPhone) => {
//   try {
//     const usersRef = ref(database, 'discAssessments')
//     const usersQuery = query(
//       usersRef,
//       orderByChild('userPhone'),
//       equalTo(userPhone)
//     )
//     const usersSnapshot = await get(usersQuery)

//     return usersSnapshot.exists()
//   } catch (error) {
//     console.error(
//       'Erro ao verificar a existência do número de telefone:',
//       error
//     )
//     return false
//   }
// }

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

// =================================================== REGISTER ASSESSMENT

const handleRegisterAssessment = async ({ userId, assessmentData }) => {
  try {
    const userRef = ref(database, `discAssessments/${userId}/userAssessments`)
    const userAssessmentsSnapshot = await get(userRef)
    const userAssessments = userAssessmentsSnapshot.val() || []

    userAssessments.push(assessmentData)

    await set(userRef, userAssessments)

    const newIndex = userAssessments.length - 1

    return userAssessments[newIndex]
  } catch (error) {
    console.error('Erro ao obter os dados do usuário:', error)
    return null
  }
}

// =================================================== GET ADMIN ACCOUNTS

const handleGetUserData = (userId, callback) => {
  const userRef = ref(database, 'discAssessments/' + userId)

  const listener = (snapshot) => {
    try {
      if (snapshot && snapshot.exists()) {
        const userData = snapshot.val()
        callback(userData)
      } else {
        callback(null)
      }
    } catch (error) {
      toaster.danger('Falha ao obter dados da empresa')
    }
  }

  onValue(userRef, listener)

  return () => {
    off(userRef, 'value', listener)
  }
}

export {
  createUserProfile,
  getUserDataById,
  handleRegisterAssessment,
  handleGetUserData
}
