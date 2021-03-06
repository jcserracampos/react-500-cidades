const ida = async() => (await import('@resystem/ida-js-sdk'));
// import ida from '../../node_modules'

const idaConfiguration = {
  appId: process.env.REACT_APP_IDA_APP_ID,
  appKey: process.env.REACT_APP_IDA_APP_KEY,
};

export default ({ onAuthChange }) => new Promise(async (res, rej) => {
  const localIda = await ida();
  await localIda.initializeApp({
    ...idaConfiguration,
    onAuthChange,
    onLoad: (payload) => res(payload),
    onOpen: (data) => ''
  });
});


export const openIDASignin = async (ida) => {
  try {
    await ida.signinWithPopup();
  } catch (err) {
    console.log([err]);
  }
};