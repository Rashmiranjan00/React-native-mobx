import { observable, action, computed } from "mobx";
class UserStore {
  @observable firstName = "Sen";
  @observable lastName = "Appleseed";
  @observable email = "send@appleseed.com";
  @observable phone = "1155667788";

  @action data(data) {
    if (data.firstName) {
      this.firstName = data.firstName;
    }
    if (data.lastName) {
      this.lastName = data.lastName;
    }
    if (data.email) {
      this.email = data.email;
    }
    if (data.phone) {
      this.phone = data.phone;
    }
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default new UserStore();