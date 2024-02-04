import { Column, Entity, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ProfileImage } from '../domain/profile_image.domain';
import { Link } from '../../shared/models/link.model';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';
import { CustomMimeType } from '../types/mine-type.types';
import { ObjectId } from 'mongodb';

@Entity({ name: 'profile_image' })
export class ProfileImageEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  link: string;

  @Column()
  name: string;

  @Column()
  mimeType: string;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;

  static from(domain: ProfileImage): ProfileImageEntity {
    const entity = new ProfileImageEntity();
    entity.id = domain.id.toHexString();
    entity.link = domain.link.value;
    entity.name = domain.name.value;
    entity.mimeType = domain.mimeType;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: ProfileImageEntity): ProfileImage {
    return {
      id: new ObjectId(entity.id),
      link: new Link(entity.link),
      name: new ProfileImageName(entity.name),
      mimeType: entity.mimeType as CustomMimeType,
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
