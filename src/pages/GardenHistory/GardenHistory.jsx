import * as usersService from '../../utilities/users-service';

export default function GardenHistory() {

  async function handleCheckToken() {
    // Promise will resolve to a Date object
    const expDate = await usersService.checkToken();
    console.log(new Date(expDate));
  }

  return (
    <>
      <h1>Garden History</h1>
    </>
  );
}