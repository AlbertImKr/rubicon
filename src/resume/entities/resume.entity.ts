import { ObjectId } from 'mongodb';
import {
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import {
  EntityAddress,
  EntityBriefIntroduction,
  EntityCreatedAt,
  EntityEmail,
  EntityPhoneNumber,
  EntityPrimaryId,
  EntityRelationId,
  EntityResumeName,
  EntityResumeOccupation,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';
import { InterestField } from './field_of_interest.entity';
import { PortfolioFile } from './portfolio_file.entity';
import { PortfolioLink } from './portfolio_links.entity';
import { TechnicalSkill } from './technical_skill.entity';
import { ProfileImage } from './profile_image.entity';
import { ProjectExperience } from './project_experience.entity';
import { WorkExperience } from './work_experience.entity';

@Entity({ name: 'resume' })
export class Resume {
  @EntityPrimaryId()
  id: ObjectId;

  @EntityRelationId()
  userAccountId: ObjectId;

  @EntityAddress()
  address: Address;

  @EntityBriefIntroduction()
  briefIntroduction: BriefIntroduction;

  @EntityEmail()
  email: Email;

  @EntityResumeName()
  name: ResumeName;

  @EntityResumeOccupation()
  occupation: ResumeOccupation;

  @EntityPhoneNumber()
  phoneNumber: PhoneNumber;

  @OneToOne(() => ProfileImage, (profileImage) => profileImage.resume, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  @JoinColumn({ name: 'profile_image_id', referencedColumnName: 'id' })
  profileImage: ProfileImage;

  @OneToMany(() => PortfolioFile, (portfolioFile) => portfolioFile.resume, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  portfolioFiles: PortfolioFile[];

  @OneToMany(() => PortfolioLink, (portfolioLink) => portfolioLink.resume, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  portfolioLinks: PortfolioLink[];

  @OneToMany(
    () => ProjectExperience,
    (projectExperience) => projectExperience.resume,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  projectExperiences: ProjectExperience[];

  @ManyToMany(() => InterestField)
  @JoinTable({
    name: 'resume_fields_of_interest',
    joinColumn: { name: 'resume_id' },
    inverseJoinColumn: { name: 'interest_field_id' },
  })
  interestsFields: InterestField[];

  @ManyToMany(() => TechnicalSkill)
  @JoinTable({
    name: 'resume_technical_skills',
    joinColumn: { name: 'resume_id' },
    inverseJoinColumn: { name: 'technical_skill_id' },
  })
  technicalSkills: TechnicalSkill[];

  @ManyToMany(() => WorkExperience)
  @JoinTable({
    name: 'resume_work_experiences',
    joinColumn: { name: 'resume_id' },
    inverseJoinColumn: { name: 'work_experience_id' },
  })
  workExperiences: WorkExperience[];

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
