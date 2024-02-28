import React, {useState} from "react"

const Comments = ({ onVideo }) => {
    const { comments } = onVideo
    const [hideComment, setHideComment] = useState(false)

    function toggleComments() {
        setHideComment(!hideComment)
    }

    return (
        <div className="Comments">
            <button onClick={toggleComments}>
                {hideComment ? 'Show Comments' : 'Hide Comments'}
            </button>
            {!hideComment && (
                <div>
                  {comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.user}: {comment.comment}</p>
                    </div>
                  ))}
                </div>
            )}
        </div>
    )
}

export default Comments;