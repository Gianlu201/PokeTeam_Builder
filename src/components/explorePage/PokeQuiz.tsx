import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import type { Question } from '../../types/myTypes';
import type { Pokemon } from '../../types/APITypes';
import { Button } from '../ui/button';
import { Trophy } from 'lucide-react';

// type 1 => domanda su chi è il Pokémon di cui si mostra lo sprite     x3
// type 2 => domanda sul tipo principale del Pokémon mostrato           x2
// type 3 => domanda sulla statistica più alta del Pokémon mostrato     x1
// type 4 => domanda sulla pre-evoluzione del Pokémon mostrato          x2
// type 5 => domanda sull'evoluzione del Pokémon mostrato               x2

const PokeQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [answerCheck, setAnswerCheck] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResultsView, setShowResultsView] = useState<boolean>(false);

  const pokemonList = useAppSelector((state) => state.pokemon.list);
  const pokemonEvolutions = useAppSelector(
    (state) => state.pokemon.evolutionChains
  );

  const startQuiz = () => {
    setShuffledQuestions([]);
    setShuffledAnswers([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswerCheck(false);
    setSelectedAnswer('');
    setShowResultsView(false);

    getType1Questions();
  };

  const getType1Questions = () => {
    // type 1 => domanda su chi è il Pokémon di cui si mostra lo sprite     x3
    const typeOneQuestions: Question[] = [];
    const randomPokemons: Pokemon[] = [];

    // pesco 3 Pokémon diversi a caso
    const usedNames = new Set<string>();

    while (randomPokemons.length < 3 && usedNames.size < pokemonList.length) {
      const pokemon =
        pokemonList[Math.floor(Math.random() * pokemonList.length)];

      if (
        pokemon.pokemon_v2_pokemonsprites[0]?.front_sprite &&
        !usedNames.has(pokemon.name)
      ) {
        randomPokemons.push(pokemon);
        usedNames.add(pokemon.name);
      }
    }

    randomPokemons.forEach((randomPokemon) => {
      const question = 'What is the name of this Pokémon?';
      const questionImg =
        randomPokemon.pokemon_v2_pokemonsprites[0].front_sprite ?? '';
      const rightAnswer = randomPokemon.name;

      // pesco 3 risposte sbagliate diverse tra loro
      const wrongAnswers: string[] = [];
      while (wrongAnswers.length < 3) {
        const candidate =
          pokemonList[Math.floor(Math.random() * pokemonList.length)].name;
        if (candidate !== rightAnswer && !wrongAnswers.includes(candidate)) {
          wrongAnswers.push(candidate);
        }
      }

      const newQuestion: Question = {
        type: 1,
        question,
        questionImg,
        rightAnswer,
        answer2: wrongAnswers[0],
        answer3: wrongAnswers[1],
        answer4: wrongAnswers[2],
      };

      typeOneQuestions.push(newQuestion);
    });

    setQuestions(typeOneQuestions);
    getType2Questions();
  };

  const getType2Questions = () => {
    // type 2 => domanda sul tipo principale del Pokémon mostrato           x2
    const typeTwoQuestions: Question[] = [];
    const randomPokemons: Pokemon[] = [];

    // pesco 2 Pokémon diversi a caso
    const usedNames = new Set<string>();

    while (randomPokemons.length < 2 && usedNames.size < pokemonList.length) {
      const pokemon =
        pokemonList[Math.floor(Math.random() * pokemonList.length)];

      if (
        pokemon.pokemon_v2_pokemonsprites[0]?.front_sprite &&
        !usedNames.has(pokemon.name)
      ) {
        randomPokemons.push(pokemon);
        usedNames.add(pokemon.name);
      }
    }

    randomPokemons.forEach((randomPokemon) => {
      const question = `What is this Pokémon's primary type?`;
      const questionImg =
        randomPokemon.pokemon_v2_pokemonsprites[0].front_sprite ?? '';
      const rightAnswer =
        randomPokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;

      // pesco 3 risposte sbagliate diverse tra loro
      const wrongAnswers: string[] = [];
      while (wrongAnswers.length < 3) {
        const candidateType =
          pokemonList[Math.floor(Math.random() * pokemonList.length)]
            .pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
        if (
          candidateType !== rightAnswer &&
          !wrongAnswers.includes(candidateType)
        ) {
          wrongAnswers.push(candidateType);
        }
      }

      const newQuestion: Question = {
        type: 1,
        question,
        questionImg,
        rightAnswer,
        answer2: wrongAnswers[0],
        answer3: wrongAnswers[1],
        answer4: wrongAnswers[2],
      };

      typeTwoQuestions.push(newQuestion);
    });

    setQuestions((state) => [...state, ...typeTwoQuestions]);
    getType3Questions();
  };

  const getType3Questions = () => {
    // type 3 => domanda sulla statistica più alta del Pokémon mostrato     x1
    const randomPokemon =
      pokemonList[Math.floor(Math.random() * pokemonList.length)];

    const question = `What is this Pokémon's highest stat?`;
    const questionImg =
      randomPokemon.pokemon_v2_pokemonsprites[0].front_sprite ?? '';

    const higestStats = randomPokemon.pokemon_v2_pokemonstats.reduce((max, p) =>
      p.base_stat > max.base_stat ? p : max
    );
    const rightAnswer = higestStats.pokemon_v2_stat.name;

    // pesco 3 risposte sbagliate diverse tra loro
    const wrongAnswers: string[] = [];
    while (wrongAnswers.length < 3) {
      const candidateStat =
        randomPokemon.pokemon_v2_pokemonstats[
          Math.floor(
            Math.random() * randomPokemon.pokemon_v2_pokemonstats.length
          )
        ].pokemon_v2_stat.name;
      if (
        candidateStat !== rightAnswer &&
        !wrongAnswers.includes(candidateStat)
      ) {
        wrongAnswers.push(candidateStat);
      }
    }

    const typeThreeQuestion: Question = {
      type: 1,
      question,
      questionImg,
      rightAnswer,
      answer2: wrongAnswers[0],
      answer3: wrongAnswers[1],
      answer4: wrongAnswers[2],
    };

    setQuestions((state) => [...state, typeThreeQuestion]);
    getType4Questions();
  };

  const getType4Questions = () => {
    // type 4 => domanda sulla pre-evoluzione del Pokémon mostrato          x2
    const typeFourQuestions: Question[] = [];
    const randomPokemons: Pokemon[] = [];

    // pesco 2 Pokémon diversi a caso che abbiano una pre-evoluzione cercando tra le catene di evoluzione con almeno 2 Pokémon
    const usedChains = new Set<number>();

    while (randomPokemons.length < 2 && usedChains.size < pokemonList.length) {
      const evolutionChain =
        pokemonEvolutions[Math.floor(Math.random() * pokemonEvolutions.length)];

      if (
        evolutionChain.pokemon_v2_pokemonspecies.length > 1 &&
        !usedChains.has(evolutionChain.id)
      ) {
        const pokemonId =
          evolutionChain.pokemon_v2_pokemonspecies[
            evolutionChain.pokemon_v2_pokemonspecies.length - 1
          ].id;
        const pokemon = pokemonList.find((p) => p.id === pokemonId);

        if (pokemon) {
          randomPokemons.push(pokemon);
          usedChains.add(evolutionChain.id);
        }
      }
    }

    randomPokemons.forEach((randomPokemon) => {
      const question = `What is the pre-evolution of this Pokémon?`;
      const questionImg =
        randomPokemon.pokemon_v2_pokemonsprites[0].front_sprite ?? '';

      const preEvolution = pokemonList.find(
        (p) => p.id === randomPokemon.id - 1
      );

      const rightAnswer = preEvolution?.name ?? '';

      // pesco 3 risposte sbagliate diverse tra loro
      const wrongAnswers: string[] = [];
      while (wrongAnswers.length < 3) {
        const candidate =
          pokemonList[Math.floor(Math.random() * pokemonList.length)].name;
        if (candidate !== rightAnswer && !wrongAnswers.includes(candidate)) {
          wrongAnswers.push(candidate);
        }
      }

      const newQuestion: Question = {
        type: 1,
        question,
        questionImg,
        rightAnswer,
        answer2: wrongAnswers[0],
        answer3: wrongAnswers[1],
        answer4: wrongAnswers[2],
      };

      typeFourQuestions.push(newQuestion);
    });

    setQuestions((state) => [...state, ...typeFourQuestions]);
    getType5Questions();
  };

  const getType5Questions = () => {
    // type 5 => domanda sull'evoluzione del Pokémon mostrato               x2
    const typeFiveQuestions: Question[] = [];
    const randomPokemons: Pokemon[] = [];

    // pesco 2 Pokémon diversi a caso che abbiano un'evoluzione cercando tra le catene di evoluzione con almeno 2 Pokémon
    const usedChains = new Set<number>();

    while (randomPokemons.length < 2 && usedChains.size < pokemonList.length) {
      const evolutionChain =
        pokemonEvolutions[Math.floor(Math.random() * pokemonEvolutions.length)];

      if (
        evolutionChain.pokemon_v2_pokemonspecies.length > 1 &&
        !usedChains.has(evolutionChain.id)
      ) {
        const pokemonId = evolutionChain.pokemon_v2_pokemonspecies[0].id;
        const pokemon = pokemonList.find((p) => p.id === pokemonId);

        if (pokemon) {
          randomPokemons.push(pokemon);
          usedChains.add(evolutionChain.id);
        }
      }
    }

    randomPokemons.forEach((randomPokemon) => {
      const question = `What is the evolution of this Pokémon?`;
      const questionImg =
        randomPokemon.pokemon_v2_pokemonsprites[0].front_sprite ?? '';

      const preEvolution = pokemonList.find(
        (p) => p.id === randomPokemon.id + 1
      );

      const rightAnswer = preEvolution?.name ?? '';

      // pesco 3 risposte sbagliate diverse tra loro
      const wrongAnswers: string[] = [];
      while (wrongAnswers.length < 3) {
        const candidate =
          pokemonList[Math.floor(Math.random() * pokemonList.length)].name;
        if (candidate !== rightAnswer && !wrongAnswers.includes(candidate)) {
          wrongAnswers.push(candidate);
        }
      }

      const newQuestion: Question = {
        type: 1,
        question,
        questionImg,
        rightAnswer,
        answer2: wrongAnswers[0],
        answer3: wrongAnswers[1],
        answer4: wrongAnswers[2],
      };

      typeFiveQuestions.push(newQuestion);
    });

    setQuestions((state) => [...state, ...typeFiveQuestions]);
  };

  const shuffleQuestions = () => {
    const newOrder = Array.from({ length: 10 }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );

    const reorderedQuestions: Question[] = [];

    newOrder.forEach((i) => {
      reorderedQuestions.push(questions[i]);
    });

    setShuffledQuestions(reorderedQuestions);
  };

  const shuffleAnswers = () => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    const answers = [
      currentQuestion.rightAnswer,
      currentQuestion.answer2,
      currentQuestion.answer3,
      currentQuestion.answer4,
    ];

    const newOrder = Array.from({ length: 4 }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );

    const reorderedAnswers: string[] = [];

    newOrder.forEach((i) => {
      reorderedAnswers.push(answers[i]);
    });

    setShuffledAnswers(reorderedAnswers);
  };

  const checkAnswer = (answer: string) => {
    setAnswerCheck(true);

    if (shuffledQuestions[currentQuestionIndex].rightAnswer === answer) {
      setScore((score) => score + 1);
    }
  };

  const checkButtonColor = (answer: string) => {
    switch (true) {
      case answer === shuffledQuestions[currentQuestionIndex].rightAnswer:
        return 'bg-green-300';

      case answer === selectedAnswer:
        return 'bg-red-300';

      default:
        return 'bg-gray-300';
    }
  };

  useEffect(() => {
    startQuiz();
  }, []);

  useEffect(() => {
    if (questions.length === 10) {
      shuffleQuestions();
    }
  }, [questions]);

  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      shuffleAnswers();
    }
  }, [currentQuestionIndex, shuffledQuestions]);

  return (
    <div>
      {shuffledQuestions.length && (
        <>
          {!showResultsView ? (
            <div>
              <div className='flex justify-between items-center'>
                <p className='text-sm font-semibold text-end'>
                  {currentQuestionIndex + 1}/10
                </p>
                <p>Correct: {score}</p>
              </div>
              <h3 className='text-2xl font-semibold text-center'>
                {shuffledQuestions[currentQuestionIndex].question}
              </h3>
              <img
                src={shuffledQuestions[currentQuestionIndex].questionImg}
                alt='Pokémon image'
                className='aspect-auto w-[20%] max-w-[200px] block mx-auto'
              />

              <div className='grid grid-cols-2 gap-4'>
                {shuffledAnswers.map((answer, index) => (
                  <Button
                    key={index}
                    variant={'default'}
                    className={`border border-black rounded-lg py-7 text-lg ${
                      answerCheck ? checkButtonColor(answer) : ''
                    }`}
                    disabled={answerCheck}
                    onClick={() => {
                      setSelectedAnswer(answer);
                      checkAnswer(answer);
                    }}
                  >
                    {answer}
                  </Button>
                ))}
              </div>

              {answerCheck && (
                <div className='flex justify-center mt-4'>
                  <Button
                    variant={'sysOpt'}
                    onClick={() => {
                      if (currentQuestionIndex < 9) {
                        setCurrentQuestionIndex((index) => index + 1);
                        setSelectedAnswer('');
                        setAnswerCheck(false);
                      } else {
                        setShowResultsView(true);
                      }
                    }}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className='text-center'>
              <Trophy className='w-16 h-16 text-amber-400 mx-auto mb-1' />
              <h3 className='text-2xl font-bold mb-4'>Quiz completed!</h3>
              <p className='text-lg mb-4'>
                Final score:{' '}
                <span className='text-blue-600 text-lg font-semibold'>
                  {score}/{shuffledQuestions.length}
                </span>
              </p>
              <Button
                variant={'sysOpt'}
                className='mx-auto'
                onClick={() => {
                  startQuiz();
                }}
              >
                Try again
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PokeQuiz;
