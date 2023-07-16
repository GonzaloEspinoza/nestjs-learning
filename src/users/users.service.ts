import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  private users:User[]=[
    {
      id:1,
      name:'tobias espinoza'
    }
  ]
  create(createUserDto: CreateUserDto) {
    
    const {id, name} = createUserDto;
    this.users.push({
      id,
      name
    })
    return {code:0, message:"creted succes full", data:this.users}
  }

  findAll() {
    return this.users;

    // return `This action returns all users`;
  }

  findOne(id: number) {

    const user = this.users.find(user=>user.id===id);
    if(!user){
      return {code:0, message:`id #${id} no fount`}
    }
    return user;
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {

    console.log("update data user")
    const user = this.users.find(user=>user.id===id);
    if(!user){
      return {code:1, message:`id #${id} no fount`}
    }

    for(var i=0;i<this.users.length;i++){
      if(this.users[i].id===id){
        const userAuX=this.users;
        userAuX[i].name = updateUserDto.name;
        this.users=[...userAuX]
        
      }
    }
    return {code:0, message:"update succes full", data:this.users}
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
