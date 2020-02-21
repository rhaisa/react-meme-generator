import React from 'react';
import Select from 'react-select';

export const options = [
  { label: 'Afraid to Ask Andy', value: 'afraid' },
  { label: '10 Guy', value: 'tenguy' },
  { label: 'Almost Politically Correct Redneck', value: 'apcr' },
  { label: 'An Older Code Sir, But It Checks Out', value: 'older' },
  { label: 'Ancient Aliens Guy', value: 'aag' },
  { label: 'And Then I Said', value: 'atis' },
  { label: 'At Least You Tried', value: 'tried' },
  { label: 'Baby Insanity Wolf', value: 'biw' },
  { label: "Baby, You've Got a Stew Going", value: 'stew' },
  { label: 'Bad Luck Brian', value: 'blb' },
  { label: "But It's Honest Work", value: 'bihw' },
  { label: "But That's None of My Business", value: 'kermit' },
  { label: 'Butthurt Dweller', value: 'bd' },
  { label: 'Captain Hindsight', value: 'ch' },
  { label: 'Comic Book Guy', value: 'cbg' },
  { label: 'Condescending Wonka', value: 'wonka' },
  { label: 'Confession Bear', value: 'cb' },
  { label: 'Confused Gandalf', value: 'gandalf' },
  { label: 'Conspiracy Keanu', value: 'keanu' },
  { label: 'Crying on Floor', value: 'cryingfloor' },
  { label: 'Dating Site Murderer', value: 'dsm' },
  { label: 'Disaster Girl', value: 'disastergirl' },
  { label: 'Do It Live!', value: 'live' },
  { label: 'Do You Want Ants?', value: 'ants' },
  { label: 'Doge', value: 'doge' },
  { label: 'Donald Trump', value: 'trump' },
  { label: 'Drakeposting', value: 'drake' },
  { label: 'Ermahgerd', value: 'ermg' },
  { label: 'Facepalm', value: 'facepalm' },
  { label: 'Feels Good', value: 'feelsgood' },
  { label: 'First Try!', value: 'firsttry' },
  { label: 'First World Problems', value: 'fwp' },
  { label: 'Forever Alone', value: 'fa' },
  { label: 'Foul Bachelor Frog', value: 'fbf' },
  { label: 'Fuck Me, Right?', value: 'fmr' },
  { label: 'Futurama Fry', value: 'fry' },
  { label: 'Good Guy Greg', value: 'ggg' },
  { label: 'Grumpy Cat', value: 'grumpycat' },
  { label: 'Hide the Pain Harold', value: 'harold' },
  { label: 'Hipster Barista', value: 'hipster' },
  { label: 'I Can Has Cheezburger?', value: 'icanhas' },
  { label: "I Feel Like I'm Taking Crazy Pills", value: 'crazypills' },
  { label: 'I Guarantee It', value: 'mw' },
  { label: "I Have No Idea What I'm Doing", value: 'noidea' },
  { label: 'I Immediately Regret This Decision!', value: 'regret' },
  { label: 'I Should Buy a Boat Cat', value: 'boat' },
  { label: 'I Should Not Have Said That', value: 'hagrid' },
  { label: 'I Would Be So Happy', value: 'sohappy' },
  { label: 'I am the Captain Now', value: 'captain' },
  { label: "I'm Going to Build My Own Theme Park", value: 'bender' },
  { label: 'Inigo Montoya', value: 'inigo' },
  { label: 'Insanity Wolf', value: 'iw' },
  { label: "It's A Trap!", value: 'ackbar' },
  { label: "It's Happening", value: 'happening' },
  { label: "It's Simple, Kill the Batman", value: 'joker' },
  { label: 'Jony Ive Redesigns Things', value: 'ive' },
  { label: 'Joseph Ducreux / Archaic Rap', value: 'jd' },
  { label: 'Laughing Lizard', value: 'll' },
  { label: 'Laundry Room Viking', value: 'lrv' },
  { label: 'Leo Strutting', value: 'leo' },
  { label: 'Life... Finds a Way', value: 'away' },
  { label: 'Matrix Morpheus', value: 'morpheus' },
  { label: 'Member Berries', value: 'mb' },
  { label: 'Milk Was a Bad Choice', value: 'badchoice' },
  { label: 'Mini Keanu Reeves', value: 'mini-keanu' },
  { label: 'Minor Mistake Marvin', value: 'mmm' },
  { label: 'Mocking Spongebob', value: 'spongebob' },
  { label: 'No Soup for You / Soup Nazi', value: 'soup-nazi' },
  { label: 'Nothing To Do Here', value: 'jetpack' },
  { label: "Oh, I'm Sorry, I Thought This Was America", value: 'imsorry' },
  { label: "Oh, Is That What We're Going to Do Today?", value: 'red' },
  { label: 'One Does Not Simply Walk into Mordor', value: 'mordor' },
  { label: 'Oprah You Get a Car', value: 'oprah' },
  { label: 'Overly Attached Girlfriend', value: 'oag' },
  { label: 'Pepperidge Farm Remembers', value: 'remembers' },
  { label: 'Persian Cat Room Guardian', value: 'persian' },
  { label: 'Philosoraptor', value: 'philosoraptor' },
  { label: 'Probably Not a Good Idea', value: 'jw' },
  { label: 'Push it somewhere else Patrick', value: 'patrick' },
  { label: 'Roll Safe', value: 'rollsafe' },
  { label: 'Sad Barack Obama', value: 'sad-obama' },
  { label: 'Sad Bill Clinton', value: 'sad-clinton' },
  { label: 'Sad Frog / Feels Bad Man', value: 'sadfrog' },
  { label: 'Sad George Bush', value: 'sad-bush' },
  { label: 'Sad Joe Biden', value: 'sad-biden' },
  { label: 'Sad John Boehner', value: 'sad-boehner' },
  { label: 'Salt Bae', value: 'saltbae' },
  { label: 'Sarcastic Bear', value: 'sarcasticbear' },
  { label: 'Schrute Facts', value: 'dwight' },
  { label: 'Scumbag Brain', value: 'sb' },
  { label: 'Scumbag Steve', value: 'ss' },
  { label: 'Seal of Approval', value: 'soa' },
  { label: 'Sealed Fate', value: 'sf' },
  { label: 'See? Nobody Cares', value: 'dodgson' },
  { label: 'Shut Up and Take My Money!', value: 'money' },
  { label: 'Skeptical Snake', value: 'snek' },
  { label: 'Skeptical Third World Kid', value: 'sk' },
  { label: 'So Hot Right Now', value: 'sohot' },
  { label: "So I Got That Goin' For Me, Which is Nice", value: 'nice' },
  { label: 'Socially Awesome Awkward Penguin', value: 'awesome-awkward' },
  { label: 'Socially Awesome Penguin', value: 'awesome' },
  { label: 'Socially Awkward Awesome Penguin', value: 'awkward-awesome' },
  { label: 'Socially Awkward Penguin', value: 'awkward' },
  { label: 'Stop It, Get Some Help', value: 'stop-it' },
  { label: 'Stop Trying to Make Fetch Happen', value: 'fetch' },
  { label: 'Success Kid', value: 'success' },
  { label: 'Sudden Clarity Clarence', value: 'scc' },
  { label: 'Super Cool Ski Instructor', value: 'ski' },
  {
    label: "Sweet Brown / Ain't Nobody Got Time For That",
    value: 'aint-got-time',
  },
  { label: 'That Would Be Great', value: 'officespace' },
  { label: 'The Most Interesting Man in the World', value: 'interesting' },
  { label: 'The Rent Is Too Damn High', value: 'toohigh' },
  { label: 'This is Bull, Shark', value: 'bs' },
  { label: 'This is Fine', value: 'fine' },
  { label: 'This is Sparta!', value: 'sparta' },
  { label: 'Ugandan Knuckles', value: 'ugandanknuck' },
  { label: 'Unpopular opinion puffin', value: 'puffin' },
  { label: 'What Year Is It?', value: 'whatyear' },
  { label: 'What is this, a Center for Ants?!', value: 'center' },
  { label: 'Why Not Both?', value: 'both' },
  { label: 'Winter is coming', value: 'winter' },
  { label: 'X all the Y', value: 'xy' },
  { label: 'X, X Everywhere', value: 'buzz' },
  { label: 'Xzibit Yo Dawg', value: 'yodawg' },
  { label: 'Y U NO Guy', value: 'yuno' },
  { label: "Y'all Got Any More of Them", value: 'yallgot' },
  { label: 'You Know What Really Grinds My Gears?', value: 'gears' },
  { label: 'You Should Feel Bad', value: 'bad' },
  { label: 'You Sit on a Throne of Lies', value: 'elf' },
  { label: 'You Were the Chosen One!', value: 'chosen' },
];

function SelectBox(props) {
  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      options={options}
      className="input"
    />
  );
}
export default SelectBox;

// }))(InputBase);

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

//   return (
//     <div>
//       <FormControl className={classes.margin}>
//         <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
//         <BootstrapInput id="demo-customized-textbox" />
//       </FormControl>
//       <FormControl className={classes.margin}>
//         <InputLabel id="demo-customized-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-customized-select-label"
//           id="demo-customized-select"
//           value={age}
//           onChange={handleChange}
//           input={<BootstrapInput />}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl className={classes.margin}>
//         <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
//         <NativeSelect
//           id="demo-customized-select-native"
//           value={age}
//           onChange={handleChange}
//           input={<BootstrapInput />}
//         >
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//       </FormControl>
//     </div>
//   );
// }
