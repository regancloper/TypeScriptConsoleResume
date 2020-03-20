interface PersonInfo {
    name: string;
    career: string;
    description: string;
}

let basicInfo: PersonInfo = {
    name: "Regan Loper",
    career: "Attorney",
    description: "I am a minimalist."
}

interface PersonDetails {
    interests: string[];
    priorExperience: JobExperience[];
    skills: Skill[];
}

interface JobExperience {
    company: string;
    jobTitle: string;
    jobDescription: string;
}

interface Skill {
    name: string;
    isCool: boolean;
}

let otherInfo: PersonDetails = {
    interests: [
        "Golf", "Software Development", "Alternative Forms of Transportation",
        "Playing Guitar"
    ],
    priorExperience: [
        {
            company: "Burr & Forman, LLP",
            jobTitle: "Associate Attorney",
            jobDescription: "Bankruptcy attorney in Burr's creditors' rights and bankruptcy practice group."
        },
        {
            company: "Burr & Forman, LLP",
            jobTitle: "Summer Associate",
            jobDescription: "Employed as legal associate to attorneys in law firm after my first and second years of law school."
        },
        {
            company: "Washington & Lee University School of Law",
            jobTitle: "Summer Intern",
            jobDescription: "Interned at law school's Black Lung Clinic program, and served as attorney assisting ex-coal miners in obtaining black lung disability benefits."
        }
    ],
    skills: [
        {
            name: "Golf",
            isCool: false
        },
        {
            name: "Java",
            isCool: true
        },
        {
            name: "Playing Guitar",
            isCool: true
        },
        {
            name: "Personal Finance",
            isCool: false
        },
        {
            name: "Investing",
            isCool: false
        }
    ]
}

// prints basic info to the console
for (let i in basicInfo) {
    let key: string = i.charAt(0).toUpperCase() + i.slice(1);
    let val: string = basicInfo[i];
    if (i == "name") {
        val = val.toUpperCase();
    }
    console.log(key + ": " + val);
}
console.log("\n");

// prints interests to the console
console.log("My Interests:");
for (let i = 0; i < otherInfo.interests.length; i++) {
    console.log("* " + otherInfo.interests[i]);
}
console.log("\n");

// prints prior job experience to the console
console.log("My Previous Experience:");
for (let i = 0; i < otherInfo.priorExperience.length; i++) {
    displayPosition(otherInfo.priorExperience[i].company, otherInfo.priorExperience[i].jobTitle, otherInfo.priorExperience[i].jobDescription);
}
console.log("\n");

// prints skills to the console
console.log("My Skills:");
for (let i = 0; i < otherInfo.skills.length; i++) {
    displaySkill(otherInfo.skills[i].name, otherInfo.skills[i].isCool);
}

// displays prior positions at other companies
function displayPosition(comp: string, title: string, desc: string) {
    console.log("* " + title + " at " + comp + " - " + desc);
}

// displays skills
function displaySkill(name: string, coolness: boolean) {
    if (coolness == true) {
        name = "BAM: " + name;
    }
    console.log("* " + name);
}