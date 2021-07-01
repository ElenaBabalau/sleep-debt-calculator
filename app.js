const getSleepHours = day => 
	{
  if (day === `monday`) {
    return 8;
  } else if (day === `tuesday`) { 
    return 7;
  } else if (day === `wednesday`) {
    return 6; 
  } else if (day === `thursday`) {
    return 5; 
  } else if (day === `friday`) {
    return 4; 
  } else if (day === `saturday`) {
    return 24;
  } else if (day === `sunday`) {
    return 2;
  } else {
    return `Error`
  }
  
}

const getActualSleepHours = () => 6 + 8 + 7 + 7 + 8 + 8 + 7; 

const getIdealSleepHours = idealHours => 
  idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealHours = getIdealSleepHours(8);
  if (actualSleepHours === idealHours) {
    console.log(`You got the perfect amount of sleep!`); 
} else if (actualSleepHours > idealHours) {
  console.log(`You got more sleep than needed, you are sleeping ${actualSleepHours - idealHours} more than you should.`);
} else if (actualSleepHours < idealHours) {
  console.log(`You should get some rest dude, you are getting ${idealHours - actualSleepHours} less hours than you should.`);
}  else {
  console.log(`Error`)
}
}

calculateSleepDebt();