'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Questions', [
			{
				'question': 'question 1',
				'incorrect': ['incorrect 1', 'incorrect 2', 'incorrect 3'],
				'correct': 'correct',
				'createdAt': new Date(),
				'updatedAt': new Date()
			},
		], {});
  },

  down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Questions', null, {});
  }
};
