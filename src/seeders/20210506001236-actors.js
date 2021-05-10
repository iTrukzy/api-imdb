'use strict';

const today = new Date()

const actors = [
  {
    first_name: "Will",
    last_name: "Smith",
    dob: "1968-09-25",
    biography: "Willard Carroll 'Will' Smith, Jr. (born September 25, 1968) is an American actor, comedian, producer, rapper, and songwriter. He has enjoyed success in television, film, and music. In April 2007, Newsweek called him 'the most powerful actor in Hollywood'. Smith has been nominated for five Golden Globe Awards, two Academy Awards, and has won four ...",
    profile_photo: "https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY317_CR2,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actors', actors, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('actors', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
