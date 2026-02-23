function skillsMember() {
    const member = {
        name: "",
        skills: [],
        addSkill: function (skill) {
            this.skills.push(skill);
        },
    };
    return member;
}
