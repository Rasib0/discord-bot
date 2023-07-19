const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Select a user to kick from the server (but not really)')
        .addUserOption(option => option.setName('target').setDescription('The user to kick').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for kicking the user')),
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        return interaction.reply(`${member} was kicked from the server! (jk)`);
    }
}