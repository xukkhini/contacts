let myContacts = [
	{
		firstName: 'Milly',
		lastName: 'Brown',
		number: '07232667531',
		relationship: 'Married',
		pets: 'Dogs',
		likes: [ 'Ice cream', 'Reading trashy novels', 'Fine wine' ],
		interests: [ 'Crochet', 'Keep fit', 'Breeding Weimaraners' ]
	},
	{
		firstName: 'Alex',
		lastName: 'Sumner',
		number: '07948625340',
		relationship: 'Married',
		pets: 'Guinea pigs',
		likes: [ 'Religion', 'Craft Beers', 'Amateur magic' ],
		interests: [ 'JW', 'Interior design', 'Gaming' ]
	},
	{
		firstName: 'Lisa',
		lastName: 'Polfor',
		number: '07947652334',
		relationship: 'Single',
		pets: 'None',
		likes: [ '80s music', 'Weddings' ],
		interests: [ 'Cheerleading', 'Outdoors' ]
	},
	{
		firstName: 'Phil',
		lastName: 'Withens',
		number: '07986533891',
		relationship: 'Divorced',
		pets: 'None',
		likes: [ 'Coding', 'Eating out' ],
		interests: [ 'Hunting', 'Financial markets', 'Wearable tech' ]
	}
];

function friendsLookUp(name, prop) {
	for (let i = 0; i < myContacts.length; i++) {
		if (name === myContacts[i].firstName) {
			if (myContacts[i].hasOwnProperty(prop)) {
        return myContacts[i][prop];
			} else {
        return "Try searching under a different property";
      }
		}
  }
  return "You have no friends :(";
}

let contact = friendsLookUp('Phil', 'interests');
console.log(contact);
