// import {
//   auth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   database,
//   get,
//   ref,
//   orderByChild,
//   equalTo,
//   query,
//   set,
//   push,
//   onValue,
//   off
// } from '@/firebase/firebase'
// import { handleTranslateFbError } from '@/utils/functions/firebaseTranslateErrors'

// import { toaster } from 'evergreen-ui'

// // ============================================== CREATE ADMIN DATA

// const createAdminAccount = async (adminData) => {
//   console.log('=====>', adminData)

//   try {
//     const adminAccountsRef = ref(database, 'adminAccounts/' + adminData.adminId)

//     await set(adminAccountsRef, adminData)

//     toaster.success('Credenciais salvas com sucesso')
//     return true
//   } catch (error) {
//     toaster.danger('Falha ao salvar credenciais')
//     return false
//   }
// }

// // ============================================== LOGIN

// const handleSigninAdmin = async ({ adminEmail, adminPassword }) => {
//   const registeredAdminAccountsRef = ref(database, 'registeredAdminAccounts')

//   const emailQuery = query(
//     registeredAdminAccountsRef,
//     orderByChild('adminEmail'),
//     equalTo(adminEmail)
//   )

//   try {
//     const emailQuerySnapshot = await get(emailQuery)

//     const userDataObj = emailQuerySnapshot.val()
//     const userData = Object.keys(userDataObj)

//     let userIsDeleted = false

//     if (userData.length > 0) {
//       const userDataValues = userDataObj[userData[0]]
//       userIsDeleted = userDataValues.accountDeleted
//     }

//     if (userIsDeleted) {
//       toaster.warning('Essa conta foi deletada')
//       return
//     }

//     await signInWithEmailAndPassword(auth, adminEmail, adminPassword)

//     return true
//   } catch (error) {
//     const errorCode = error.code

//     if (errorCode === 'auth/user-not-found') {
//       const emailQuerySnapshot = await get(emailQuery)

//       if (emailQuerySnapshot.exists()) {
//         toaster.warning('Para acessar sua conta, cadastre uma senha')
//         return false
//       }

//       return false
//     }

//     const traslatedError = handleTranslateFbError(errorCode)
//     toaster.danger(traslatedError)

//     return false
//   }
// }

// const handleSignupAdmin = async ({ adminName, adminEmail, adminPassword }) => {
//   try {
//     // ----------------------------------

//     const registeredAdminAccountsRef = ref(database, 'registeredAdminAccounts')

//     const emailQuery = query(
//       registeredAdminAccountsRef,
//       orderByChild('adminEmail'),
//       equalTo(adminEmail)
//     )
//     const emailQuerySnapshot = await get(emailQuery)

//     if (!emailQuerySnapshot.exists()) {
//       toaster.danger('Esse e-mail não está disponível para cadastro')
//       return false
//     }

//     const userDataObj = emailQuerySnapshot.val()
//     const userData = Object.keys(userDataObj)

//     let userRole = 'commun'

//     if (userData.length > 0) {
//       const userDataValues = userDataObj[userData[0]]
//       userRole = userDataValues.adminRole
//     }

//     // ----------------------------------

//     const adminAccountsRef = ref(database, 'adminAccounts')

//     const adminQuery = query(
//       adminAccountsRef,
//       orderByChild('adminEmail'),
//       equalTo(adminEmail)
//     )
//     const adminQuerySnapshot = await get(adminQuery)

//     if (adminQuerySnapshot.exists()) {
//       toaster.warning(
//         'Essa conta já possuí cadastro, faça login para acessar o sistema'
//       )
//       return false
//     }

//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       adminEmail,
//       adminPassword
//     )

//     if (userCredential) {
//       const adminData = {
//         adminId: userCredential.user.uid,
//         adminName,
//         adminEmail,
//         adminRole: userRole,
//         adminRegisteredAt: Date.now()
//       }

//       const adminDataResponse = await createAdminAccount(adminData)

//       if (!adminDataResponse) {
//         toaster.danger('Falha ao realizar cadastro')
//         return false
//       }
//     }

//     toaster.success('Conta criada com sucesso')
//     return true
//   } catch (error) {
//     const errorCode = error.code

//     const traslatedError = handleTranslateFbError(errorCode)
//     toaster.danger(traslatedError)

//     console.error(error.message)
//     return false
//   }
// }

// // ============================================== LOGOUT

// const handleLogoutUser = async () => {
//   try {
//     await signOut(auth)

//     return true
//   } catch (error) {
//     const errorCode = error.code
//     const errorMessage = error.message
//     console.error('Erro ao deslogar usuário: ', errorMessage, errorCode)

//     return false
//   }
// }

// // ============================================== HANDLE GET USER DATA

// const handleGetUserData = async () => {
//   const user = auth.currentUser

//   if (user) {
//     try {
//       const adminsRef = ref(database, 'adminAccounts/' + user.uid)

//       const adminQuerySnapshot = await get(adminsRef)

//       return adminQuerySnapshot.val()
//     } catch (error) {
//       return null
//     }
//   }

//   return null
// }

// // ============================================== GET ALL USERS

// const getAllUsers = (callback) => {
//   const adminAccountsRef = ref(database, 'adminAccounts')

//   const listener = (snapshot) => {
//     try {
//       const adminAccounts = []

//       snapshot.forEach((adminSnapshot) => {
//         const adminId = adminSnapshot.key
//         const accountData = adminSnapshot.val()

//         if (accountData?.accountDeleted) return

//         const account = { adminId, ...accountData }
//         adminAccounts.push(account)
//       })

//       callback(adminAccounts)
//     } catch (error) {
//       console.error('Erro ao obter as contas de admin disponíveis:', error)
//     }
//   }

//   onValue(adminAccountsRef, listener)

//   return () => {
//     off(adminAccountsRef, 'value', listener)
//   }
// }

// // -----------------------------------------------------------------

// export {
//   handleSigninAdmin,
//   handleSignupAdmin,
//   handleLogoutUser,
//   handleGetUserData,
//   getAllUsers
// }
