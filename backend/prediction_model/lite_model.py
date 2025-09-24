# import numpy as np
# import tensorflow as tf
# from tensorflow.keras.layers import Flatten, Dense
# from tensorflow.keras.models import Sequential

# lite_model = Sequential([
#     Flatten(input_shape=(250, 250, 3)),
#     Dense(128, activation='relu'),
#     Dense(64, activation='relu'),
#     Dense(2)
# ])

# lite_model.load_weights('prediction_model/weights/lite_model_weights.h5')

# # PIL Image input
# def lite_predict(image):
#     img = image.resize((250, 250)).convert('RGB')
#     img_arr = np.array(img).astype('float32')
#     img_arr = (img_arr / 255.0 - 0.5) / 0.5
#     img_arr = np.expand_dims(img_arr, axis=0)
#     prediction = lite_model.predict(img_arr)
#     result = np.argmax(tf.nn.softmax(prediction[0]).numpy())
#     if result == 0:
#         return 'Fire'
#     return 'No Fire'

import numpy as np

lite_model = None  # don't build immediately

def get_model():
    global lite_model
    if lite_model is None:
        import tensorflow as tf
        from tensorflow.keras.layers import Flatten, Dense
        from tensorflow.keras.models import Sequential

        model = Sequential([
            Flatten(input_shape=(250, 250, 3)),
            Dense(128, activation='relu'),
            Dense(64, activation='relu'),
            Dense(2)
        ])
        model.load_weights('prediction_model/weights/lite_model_weights.h5')
        lite_model = model
    return lite_model

# PIL Image input
def lite_predict(image):
    import tensorflow as tf  # keep this local too, lighter at startup

    model = get_model()
    img = image.resize((250, 250)).convert('RGB')
    img_arr = np.array(img).astype('float32')
    img_arr = (img_arr / 255.0 - 0.5) / 0.5
    img_arr = np.expand_dims(img_arr, axis=0)
    prediction = model.predict(img_arr)
    result = np.argmax(tf.nn.softmax(prediction[0]).numpy())
    return 'Fire' if result == 0 else 'No Fire'