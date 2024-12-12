-- CreateTable
CREATE TABLE `Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_title` VARCHAR(191) NOT NULL,
    `course_type` ENUM('UNDERGRADUATE', 'POSTGRADUATE') NOT NULL,
    `course_summary` VARCHAR(191) NOT NULL,
    `course_award_name` VARCHAR(191) NOT NULL,
    `ucas_code` VARCHAR(191) NULL,
    `ucas_points` INTEGER NULL,
    `year_of_entry` VARCHAR(191) NOT NULL,
    `mode_of_attendance` ENUM('FULL_TIME', 'PART_TIME') NOT NULL,
    `study_length` VARCHAR(191) NOT NULL,
    `has_foundation_year` BOOLEAN NOT NULL,
    `course_subject_id` INTEGER NOT NULL,
    `no_longer_recruiting` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_course_subject_id_fkey` FOREIGN KEY (`course_subject_id`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
