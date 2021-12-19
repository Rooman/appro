import React from 'react';

import classes from './Feedback.module.scss';
import Container from '../../../containers/hoc/Container';
import TextInput from '../../../components/UI/TextInput';
import Button, { ButtonType } from '../../../components/UI/Button';
import { useForm, Controller } from 'react-hook-form';

interface IFeedbackForm {
  name: string;
  email: string;
  phone: string;
  feedback: string;
}

const Feedback = () => {
  const { handleSubmit, errors, control, reset } = useForm<IFeedbackForm>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      feedback: '',
    },
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit = (value: IFeedbackForm) => {
    console.log(value);
    reset();
  };

  return (
    <section className={classes['feedback']}>
      <Container>
        <div className={classes['feedback__header']}>Остались вопросы? Напишите нам!</div>

        <div className={classes['feedback__body']}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes['feedback__form']}>
            <div className={classes['feedback__input']}>
              <Controller
                name="name"
                control={control}
                defaultValue={''}
                rules={{ required: true }}
                render={(props) => (
                  <TextInput error={!!errors.name} value={props.value} onChange={props.onChange} placeholder="Имя" />
                )}
              />
            </div>
            <div className={classes['feedback__input']}>
              <Controller
                name="email"
                control={control}
                defaultValue={''}
                rules={{
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                }}
                render={(props) => (
                  <TextInput
                    value={props.value}
                    error={!!errors.email}
                    onChange={props.onChange}
                    placeholder="E-mail"
                  />
                )}
              />
            </div>
            <div className={classes['feedback__input']}>
              <Controller
                name="phone"
                control={control}
                defaultValue={''}
                rules={{}}
                render={(props) => (
                  <TextInput
                    error={!!errors.phone}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="Номер телефона (необязательно)"
                  />
                )}
              />
            </div>

            {/*TODO: Where is form?!??!!?!?!?*/}
            <div className={classes['feedback__input']}>
              <Controller
                name="feedback"
                control={control}
                defaultValue={''}
                rules={{}}
                render={(props) => (
                  <TextInput
                    error={!!errors.feedback}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="Ваше сообщение"
                  />
                )}
              />
            </div>
            <Button buttonType={ButtonType.BIG} title="Отправить сообщение" />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
