import { HttpException, HttpStatus, Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import * as bcryptjs from 'bcryptjs';
import { FileInterceptor } from '@nestjs/platform-express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}
  @UseInterceptors(FileInterceptor('image'))
  async register(@UploadedFile() image, {user_name, user_lastName, user_email, user_password,  business_name, user_address,}: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where:{
        user_email: user_email,
      }
    });
    if(userFound){
      throw new HttpException('User already exists', HttpStatus.CONFLICT); 
    }
    // user_role = user_role || 'user';
    const newUser = this.userRepository.create({
      id: uuid(),
      user_name: user_name,
      user_lastName: user_lastName,
      user_email: user_email,
      user_password: await bcryptjs.hash(user_password, 10),
      // user_phone: user_phone,
      business_name: business_name,
      user_address: user_address,
      // user_role: user_role,
      image: image.filename,
    });
    try{
      await this.userRepository.save(newUser);
      return newUser;
    }
    catch(error){
      console.log(error)
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }



  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
